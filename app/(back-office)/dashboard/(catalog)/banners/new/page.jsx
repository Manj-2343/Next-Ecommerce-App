"use client";
import React, { useState } from "react";
import FormHeader from "../../../../../components/backoffice/FormHeader";
import TextInput from "../../../../../components/FormInputs/TextInput";
import { useForm } from "react-hook-form";
import SubmitButton from "../../../../../components/FormInputs/SubmitButton";
import ImageInput from "../../../../../components/FormInputs/ImageInput";
import { makePostRequest } from "@/lib/apiRequest";
import ToggleInput from "../../../../../components/FormInputs/ToggleInput";

const NewPage = () => {
  const [imageUrl, setImageUrl] = useState("");
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
  //Custom Toggle Bar end
  async function onSubmit(data) {
    {
      /*  
      -id=>auto()
      -title
      -link
      -Image
      */
    }
    data.imageUrl = imageUrl;
    console.log(data);
    data.isPublished = isPublished;
    makePostRequest(setLoading, "api/banners", data, "Banner", reset);
    setImageUrl("");
  }
  return (
    <>
      <FormHeader title="New Banner" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Banner Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Banner Link"
            name="link"
            type="url"
            register={register}
            errors={errors}
          />
          {/* configure this end point in the core js */}
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="bannerImageUploader"
            label="Banner Image"
          />
          <ToggleInput
            label="Publish your Training"
            name="isPublished"
            trueTitle="Active"
            falseTitle="Draft"
            handleToggle={handleTogglePublished}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="CreateBanner"
          loadingButtonTitle="Creating Banner  please wait..."
        />
      </form>
    </>
  );
};

export default NewPage;
