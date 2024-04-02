"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { generateSlug } from "@/lib/generateSlug";
import { makePostRequest } from "@/lib/apiRequest";
import dynamic from "next/dynamic";
import FormHeader from "./FormHeader";
import TextInput from "../FormInputs/TextInput";
import SelectInput from "../FormInputs/SelectInput";
import TextAreaInput from "../FormInputs/TextAreaInput";
import ImageInput from "../FormInputs/ImageInput";
import ToggleInput from "../FormInputs/ToggleInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { useRouter } from "next/navigation";
const QuillEditorComponent = dynamic(
  () => import("../FormInputs/QuillEditorComponent"),
  {
    ssr: false,
  }
);

const NewCommunity = ({ categories }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");

  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
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
    setContent("");
    router.push("/dashboard/community");
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
