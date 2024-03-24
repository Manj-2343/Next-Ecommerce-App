"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { generateSlug } from "@/lib/generateSlug";
import FormHeader from "../../../../components/backoffice/FormHeader";
import TextInput from "../../../../components/FormInputs/TextInput";
import SubmitButton from "../../../../components/FormInputs/SubmitButton";
import TextAreaInput from "../../../../components/FormInputs/TextAreaInput";
import ImageInput from "../../../../components/FormInputs/ImageInput";
import SelectInput from "../../../../components/FormInputs/SelectInput";
import ToggleInput from "../../../../components/FormInputs/ToggleInput";
import QuillEditorComponent from "../../../../components/FormInputs/QuillEditorComponent";
import { makePostRequest } from "@/lib/apiRequest";

const NewCommunity = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const categories = [
    {
      id: 1,
      title: "Category1",
    },
    {
      id: 2,
      title: "Category2",
    },
    {
      id: 3,
      title: "Category3",
    },
  ];
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // quill editor

  //Custom Toggle Bar
  const [isPublished, setIsPublished] = useState(false);

  const handleTogglePublished = (value) => {
    setIsPublished(value);
  };
  // quilEditor end
  async function onSubmit(data) {
    {
      /*  
      -id=>auto()
      -title
      -expertId
      -CategoryId
      -slug=>auto()
      -description
      -image
      -content=>richText
      */
    }
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.content = content;
    data.isPublished = isPublished;
    console.log(data);
    makePostRequest(setLoading, "api/trainings", data, "Training", reset);
    setImageUrl("");
    setContent("")
  }
  return (
    <>
      <FormHeader title="New Training" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Training Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <SelectInput
            label="Select Category"
            name="categoryId"
            register={register}
            errors={errors}
            className="w-full"
            options={categories}
            // original multiple={true}
            multiple={false}
          />
          <TextAreaInput
            label="Training Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="trainingCommunityUploader"
            label="Training Thumbnail"
          />
          {/* Content */}
          <QuillEditorComponent
            label="Training Content"
            value={content}
            onChange={setContent}
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
          buttonTitle="Create Training"
          loadingButtonTitle="Creating Training please wait..."
        />
      </form>
    </>
  );
};

export default NewCommunity;
