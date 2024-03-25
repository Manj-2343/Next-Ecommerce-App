"use client";
import React, { useState } from "react";
import FormHeader from "../../../../../components/backoffice/FormHeader";
import TextInput from "../../../../../components/FormInputs/TextInput";
import { useForm } from "react-hook-form";
import SubmitButton from "../../../../../components/FormInputs/SubmitButton";
import { makePostRequest } from "@/lib/apiRequest";
import generateCouponCode from "@/lib/generateCouponCode";
import ToggleInput from "../../../../../components/FormInputs/ToggleInput";
import { generateIsoFormattedDate } from "@/lib/generateIsoFormattedDate";
import { useRouter } from 'next/navigation';

const NewCoupons = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //Custom Toggle Bar
  const [isPublished, setIsPublished] = useState(false);

  const handleTogglePublished = (value) => {
    setIsPublished(value);
  };
  const router = useRouter();
  async function onSubmit(data) {
    {
      /*
      -id=>auto()
      -title
      -code=>auto()
      -expiry  date
      -image
      */
    }
    const couponCode = generateCouponCode(data.title, data.expiryDate);
    const isoFormattedDate = generateIsoFormattedDate(data.expiryDate);
    data.expiryDate = isoFormattedDate;
    data.couponCode = couponCode;
    data.isPublished = isPublished;
    console.log(data);

    makePostRequest(
      setLoading,
      "api/coupons",
      data,
      "Coupon",
      reset,
      router.back("/dashboard/coupons")
    );
  }

  return (
    <>
      <FormHeader title="New Coupon" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Coupon Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          {/* <TextInput
            label="Coupon Code"
            name="couponCode"
            defaultValue="lfhsdkjgfskdjfgsdj"
            register={register}
            errors={errors}
            className="w-full"
          /> */}
          <TextInput
            label="Coupon Expiry Date"
            name="expiryDate"
            type="date"
            register={register}
            errors={errors}
            className="w-full"
          />
          <ToggleInput
            label="Publish your Coupon"
            name="isPublished"
            trueTitle="Active"
            falseTitle="Draft"
            handleToggle={handleTogglePublished}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="CreateCoupon"
          loadingButtonTitle="Creating Coupon please wait..."
        />
      </form>
    </>
  );
};

export default NewCoupons;
