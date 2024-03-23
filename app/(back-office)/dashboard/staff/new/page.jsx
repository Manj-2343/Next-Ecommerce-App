"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { makePostRequest } from "@/lib/apiRequest";
import FormHeader from "../../../../components/backoffice/FormHeader";
import TextInput from "../../../../components/FormInputs/TextInput";
import SubmitButton from "../../../../components/FormInputs/SubmitButton";
import TextAreaInput from "../../../../components/FormInputs/TextAreaInput";
import generateUserCode from "@/lib/generateUserCode";

const NewStaff = () => {
  const [loading, setLoading] = useState(false);
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
      -code=>auto()
      -expiry  date
      -image
      */
    }
    const code = generateUserCode("LFF", data.name);
    data.code = code;
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
            label="Password"
            name="password"
            register={register}
            errors={errors}
            className="w-full"
            type="password"
          />
          <TextInput
            label="Staff Email Address"
            name="email"
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
