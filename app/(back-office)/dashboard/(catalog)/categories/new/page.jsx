"use client";
import React, { useState } from "react";
import FormHeader from "../../../../../components/backoffice/FormHeader";
import TextInput from "../../../../../components/FormInputs/TextInput";
import { useForm } from "react-hook-form";
import SubmitButton from "../../../../../components/FormInputs/SubmitButton";
import TextAreaInput from "../../../../../components/FormInputs/TextAreaInput";
import { generateSlug } from "@/lib/generateSlug";
import ImageInput from "../../../../../components/FormInputs/ImageInput";
import { makePostRequest } from "@/lib/apiRequest";
import SelectInput from "../../../../../components/FormInputs/SelectInput";
import ToggleInput from "../../../../../components/FormInputs/ToggleInput";
import { useRouter } from "next/navigation";
const Categories = () => {
  const [imageUrl, setImageUrl] = useState("");
  const markets = [];
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
      -slug=>auto()
      -description
      -image
      */
    }
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.isPublished = isPublished;
    console.log(data);
    makePostRequest(setLoading, "api/categories", data, "Category", reset);
    setImageUrl("");
    router.back("dashboard/categories");
  }
  return (
    <>
      <FormHeader title="New Category" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
          />

          <TextAreaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="categoryImageUploader"
            label="Category Image"
          />
          <ToggleInput
            label="Publish your Category"
            name="isPublished"
            trueTitle="Active"
            falseTitle="Draft"
            handleToggle={handleTogglePublished}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="CreateCategory"
          loadingButtonTitle="Creating Category  please wait..."
        />
      </form>
    </>
  );
};

export default Categories;
