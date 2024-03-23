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
import ArrayItemsInput from "../../../../../components/FormInputs/ArrayItemsInput";
import ToggleInput from "../../../../../components/FormInputs/ToggleInput";

const NewProducts = () => {
  const [imageUrl, setImageUrl] = useState("");
  const categories = [
    {
      id: 1,
      title: "Category-1",
    },
    {
      id: 2,
      title: "Category-2",
    },
    {
      id: 3,
      title: "Category-3",
    },
    {
      id: 4,
      title: "Category-4",
    },
  ];
  const farmers = [
    {
      id: 1,
      title: "Farmer-1",
    },
    {
      id: 2,
      title: "Farmer-2",
    },
    {
      id: 3,
      title: "Farmer-3",
    },
    {
      id: 4,
      title: "Farmer-4",
    },
  ];
  const [tags, setTags] = useState([]);
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
      -slug=>auto()
      -description
      -images/image[]
      -sku
      -barcode
      -productPrice
      -salePrice
      -category
      -farmer
      -tags[]
      */
    }
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    data.tags = tags;
    console.log(data);
    makePostRequest(setLoading, "api/products", data, "Product", reset);
    setImageUrl("");
  }
  return (
    <>
      <FormHeader title="New Product" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3 "
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Product Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Product SKU"
            name="sku"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product BarCode"
            name="barCode"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product Price (Before Discount)"
            name="productPrice"
            register={register}
            errors={errors}
            className="w-full"
            type="number"
          />
          <TextInput
            label="Product Sale Price(Discounted)"
            name="salePrice"
            register={register}
            errors={errors}
            className="w-full"
            type="number"
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
          <SelectInput
            label="Select Farmer"
            name="farmerId"
            register={register}
            errors={errors}
            options={farmers}
            className="w-full"
            // original multiple={true}
            multiple={false}
          />
          <ImageInput
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="productImageUploader"
            label="Product Image"
          />
          {/* Tags */}
          <ArrayItemsInput setItems={setTags} items={tags} itemTitle="Tag" />

          <TextAreaInput
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
          />
          <ToggleInput
            label="Publish your Product"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          isLoading={loading}
          buttonTitle="CreateProduct"
          loadingButtonTitle="Creating Product  please wait..."
        />
      </form>
    </>
  );
};
export default NewProducts;
