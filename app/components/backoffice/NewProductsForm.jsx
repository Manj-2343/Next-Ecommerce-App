"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { generateSlug } from "@/lib/generateSlug";
import { makePostRequest } from "@/lib/apiRequest";
import generateUserCode from "@/lib/generateUserCode";
import FormHeader from "./FormHeader";
import TextInput from "../FormInputs/TextInput";
import SelectInput from "../FormInputs/SelectInput";
import ToggleInput from "../FormInputs/ToggleInput";
import ImageInput from "../FormInputs/ImageInput";
import TextAreaInput from "../FormInputs/TextAreaInput";
import ArrayItemsInput from "../FormInputs/ArrayItemsInput";
import SubmitButton from "../FormInputs/SubmitButton";
import { useRouter } from "next/navigation";

const NewProductsForm = ({ categories, farmers }) => {
  const [imageUrl, setImageUrl] = useState("");
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Custom Toggle Bar
  const [isPublished, setIsPublished] = useState(false);
  const [isWholeSale, setIsWholeSale] = useState(false);
  const handleTogglePublished = (value) => {
    setIsPublished(value);
    setIsWholeSale(value);
  };
  const router = useRouter();
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
    const productCode = generateUserCode("LP", data.title);
    data.imageUrl = imageUrl;
    data.productCode = productCode;
    data.isPublished = isPublished;
    data.isWholeSale = isWholeSale;
    data.tags = tags;
    data.qty = 1;
    console.log(data);
    makePostRequest(
      setLoading,
      "/api/products",
      data,
      "Product",
      reset,
      router.back("/dashboard/products")
    );
    setImageUrl("");
    setTags([]);
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
          <TextInput
            label="Product Stock"
            name="productStock"
            register={register}
            errors={errors}
            className="w-full"
            type="number"
          />
          <TextInput
            label="Unit of Measurement(eg Kilograms)"
            name="unit"
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

          <ToggleInput
            label="Support Wholesale Selling"
            name="isWholeSale"
            trueTitle="Supported"
            falseTitle="Not Supported"
            handleToggle={handleTogglePublished}
          />
          {isWholeSale && (
            <>
              <TextInput
                label="WholeSale Price"
                name="wholeSalePrice"
                register={register}
                errors={errors}
                className="w-full"
                type="number"
              />
              <TextInput
                label="Minimum Wholesale Qty"
                name="wholesaleQty"
                register={register}
                errors={errors}
                className="w-full"
                type="number"
              />
            </>
          )}
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
            name="isPublished"
            trueTitle="Active"
            falseTitle="Draft"
            handleToggle={handleTogglePublished}
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
export default NewProductsForm;
