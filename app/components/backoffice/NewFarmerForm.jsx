"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextInput from "../FormInputs/TextInput";
import TextAreaInput from "../FormInputs/TextAreaInput";
import ImageInput from "../FormInputs/ImageInput";
import ToggleInput from "../FormInputs/ToggleInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { useRouter } from "next/navigation";
import generateUserCode from "@/lib/generateUserCode";
import { makePostRequest } from "@/lib/apiRequest";
import ArrayItemsInput from "../FormInputs/ArrayItemsInput";

const NewFarmerForm = ({ user }) => {
  const [loading, setLoading] = useState(false);
  const [logoUrl, setLogoUrl] = useState("");
  const [products, setProducts] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ...user,
    },
  });
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
    const code = generateUserCode("LFF", data.name);
    data.code = code;
    data.userId = user?.id;
    data.isPublished = isPublished;
    data.products = products;
    data.profileImageUrl = imageUrl;
    console.log(data);
    makePostRequest(setLoading, "api/farmers", data, "Farmer Profile", reset);
    router.back("dashboard/farmers");
  }
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Farmer's Full Name"
            name="name"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Farmer Email Address"
            name="email"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Farmer's Phone"
            name="phone"
            type="tel"
            register={register}
            errors={errors}
            className="w-full"
          />

          <TextInput
            label="Farmer's Physical Address"
            name="physicalAddress"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Farmer's Contact Person"
            name="contactPerson"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Farmer's Contact Person Phone"
            name="contactPersonPhone"
            type="tel"
            register={register}
            errors={errors}
            className="w-full"
          />
          {/* Acres */}
          <TextInput
            label="What is the size of your land in Acres"
            name="landSize"
            type="number"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="What is your main crop that you cultivate"
            name="mainCrop"
            type="text"
            register={register}
            errors={errors}
            className="w-full"
          />
          <ArrayItemsInput
            setItems={setProducts}
            items={products}
            itemTitle="product"
          />
          {/* configure this end point in the corejs */}
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="farmerProfileUploader"
            label="Farmer Profile Image"
          />
          <TextAreaInput
            label="Farmer's Payment Terms"
            name="terms"
            register={register}
            errors={errors}
            isRequired={false}
          />

          <TextAreaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
            isRequired={false}
          />
          <ToggleInput
            label="Publish your Banner"
            name="isPublished"
            trueTitle="Active"
            falseTitle="Draft"
            handleToggle={handleTogglePublished}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="CreateFarmer"
          loadingButtonTitle="Creating Farmer please wait..."
        />
      </form>
    </>
  );
};

export default NewFarmerForm;
