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

const NewStaff = () => {
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
      -name
      -password
      -email
      -phone
      -PhysicalAddress
      -NIN
      -DOB
      -notes
      -isPublished
      -
      */
    }

    const code = generateUserCode("LSM", data.name);
    data.code = code;
    data.isPublished = isPublished;
    console.log(data);
    makePostRequest(setLoading, "api/staff", data, "Staff", reset);
  }

  return (
    <>
      <FormHeader title="New Staff" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Staff Full Name"
            name="name"
            register={register}
            errors={errors}
          />
          <TextInput
            label="NIN (Id Number)"
            name="nin"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Date Of Birth"
            name="Dob"
            type="date"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Staff Email Address"
            name="email"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Staff Password"
            name="password"
            type="password"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Staff Phone"
            name="phone"
            type="tel"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Staff Physical Address"
            name="physicalAddress"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextAreaInput
            label="Staff Payment Terms"
            name="terms"
            register={register}
            errors={errors}
          />
          <TextAreaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
            isRequired={false}
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
          buttonTitle="CreateStaff"
          loadingButtonTitle="Creating staff please wait..."
        />
      </form>
    </>
  );
};
export default NewStaff;
