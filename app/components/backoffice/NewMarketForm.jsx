"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { makePostRequest } from "@/lib/apiRequest";
import { generateSlug } from "@/lib/generateSlug";
import TextInput from "../FormInputs/TextInput";
import SelectInput from "../FormInputs/SelectInput";
import ImageInput from "../FormInputs/ImageInput";
import TextAreaInput from "../FormInputs/TextAreaInput";
import ToggleInput from "../FormInputs/ToggleInput";
import SubmitButton from "../FormInputs/SubmitButton";
import FormHeader from "./FormHeader";
import { useRouter } from "next/navigation";

const NewMarket = ({ categories }) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //Custom Toggle Bar
  const router = useRouter();
  const [isPublished, setIsPublished] = useState(false);

  const handleTogglePublished = (value) => {
    setIsPublished(value);
  };
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
    data.imageUrl = imageUrl;
    data.isPublished = isPublished;
    console.log(data);
    makePostRequest(setLoading, "api/markets", data, "Market", reset);
    setImageUrl("");
    router.push("/dashboard/markets");
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
            className="w-full"
          />
          <SelectInput
            label="Select Categories"
            name="categoryIds"
            register={register}
            errors={errors}
            className="w-full"
            options={categories}
            multiple={true}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
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
            name="isPublished"
            trueTitle="Active"
            falseTitle="Draft"
            handleToggle={handleTogglePublished}
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

export default NewMarket;
