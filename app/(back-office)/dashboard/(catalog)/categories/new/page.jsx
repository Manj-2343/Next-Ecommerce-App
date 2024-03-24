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

const Categories = () => {
  const [imageUrl, setImageUrl] = useState("");
  const markets = [
    {
      id: 1,
      title: "Sprouts Farmers Market",
    },
    {
      id: 2,
      title: "Cabbage Farmers Market",
    },
    {
      id: 3,
      title: "Carrot Farmers Market",
    },
    {
      id: 4,
      title: "Potato Farmers Market",
    },
    {
      id: 5,
      title: "Tomato Farmers Market",
    },
    {
      id: 6,
      title: "onion Farmers Market",
    },
  ];
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
            className="w-full"
          />
          <SelectInput
            label="Select Markets"
            name="marketIds"
            register={register}
            errors={errors}
            className="w-full"
            options={markets}
            // original multiple={true}
            multiple={false}
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
            label="Publish your Training"
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
