"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { makePostRequest } from "@/lib/apiRequest";
import FormHeader from "../../../../components/backoffice/FormHeader";
import TextInput from "../../../../components/FormInputs/TextInput";
import SubmitButton from "../../../../components/FormInputs/SubmitButton";
import TextAreaInput from "../../../../components/FormInputs/TextAreaInput";
import ImageInput from "../../../../components/FormInputs/ImageInput";
import { generateSlug } from "@/lib/generateSlug";
import ToggleInput from "../../../../components/FormInputs/ToggleInput";
const NewFarmer = () => {
  const [loading, setLoading] = useState(false);
  const [logoUrl, setLogoUrl] = useState("");
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  async function onSubmit(data) {
    {
      /*
      -id=>auto()
      -title
      -slug=>auto
      -link
      -logo
      -desc
      */
    }
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.logoUrl = logoUrl;
    console.log(data);
    makePostRequest(setLoading, "api/markets", data, "Market", reset);
    setLogoUrl("");
  }
  return (
    <>
      <FormHeader title="New Market" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Market Title"
            name="title"
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={logoUrl}
            setImageUrl={setLogoUrl}
            endpoint="marketLogoUploader"
            label="Market Logo"
          />
          <TextAreaInput
            label="Market Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ToggleInput
            label="Market status"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="CreateMarket"
          loadingButtonTitle="Creating Market please wait..."
        />
      </form>
    </>
  );
};

export default NewFarmer;
