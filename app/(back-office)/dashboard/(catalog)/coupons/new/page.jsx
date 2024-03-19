"use client";
import React, { useState } from "react";
import FormHeader from "../../../../../components/backoffice/FormHeader";
import TextInput from "../../../../../components/FormInputs/TextInput";
import { useForm } from "react-hook-form";
import SubmitButton from "../../../../../components/FormInputs/SubmitButton";
import { makePostRequest } from "@/lib/apiRequest";
import generateCouponCode from "@/lib/generateCouponCode";

const NewCoupons = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const title = watch("title");
  // const expiryDate = watch("expiryDate");
  // // const coupon = generateCouponCode({title, expiryDate});
  // console.log(title, expiryDate);
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
    data.couponCode = couponCode;
    console.log(data);
    makePostRequest(setLoading, "api/coupons", data, "Coupon", reset);
  }
  // const exampleData = {
  //   title: "Example Coupon",
  //   expiryDate: "2024-03-31"
  // };
  // const couponCode = generateCouponCode(exampleData);
  // console.log("Generated Coupon Code:", couponCode);
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
