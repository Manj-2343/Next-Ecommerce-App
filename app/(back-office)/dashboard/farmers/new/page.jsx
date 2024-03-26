"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { makePostRequest } from "@/lib/apiRequest";
import FormHeader from "../../../../components/backoffice/FormHeader";
import TextInput from "../../../../components/FormInputs/TextInput";
import SubmitButton from "../../../../components/FormInputs/SubmitButton";
import TextAreaInput from "../../../../components/FormInputs/TextAreaInput";
import generateUserCode from "@/lib/generateUserCode";
import ToggleInput from "../../../../components/FormInputs/ToggleInput";
import { useRouter } from "next/navigation";
import ImageInput from "../../../../components/FormInputs/ImageInput";
const NewFarmer = () => {
  const [loading, setLoading] = useState(false);
  const [logoUrl, setLogoUrl] = useState("");
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
    const code = generateUserCode("LFF", data.name);
    data.code = code;
    data.isPublished = isPublished;
    console.log(data);
    makePostRequest(setLoading, "api/farmers", data, "Farmer", reset);
    router.back("dashboard/farmers");
  }
  // const exampleData = {
  //   title: "Example Farmer",
  //   expiryDate: "2024-03-31"
  // };
  // const farmerCode = generateFarmerCode(exampleData);
  // console.log("Generated Farmer Code:", farmerCode);
  return (
    <>
      <FormHeader title="New Farmer" />
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
          <ImageInput
            imageUrl={logoUrl}
            setImageUrl={setLogoUrl}
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

export default NewFarmer;
