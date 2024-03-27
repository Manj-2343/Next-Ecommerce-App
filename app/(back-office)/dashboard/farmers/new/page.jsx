"use client";
import React from "react";
import FormHeader from "../../../../components/backoffice/FormHeader";
import NewFarmerForm from "../../../../components/backoffice/NewFarmerForm";

const NewFarmer = () => {
  return (
    <>
      <FormHeader title="New Farmer" />
      <NewFarmerForm />
    </>
  );
};

export default NewFarmer;
