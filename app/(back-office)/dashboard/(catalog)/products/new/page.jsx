import React from "react";
import NewProductsForm from "../../../../../components/backoffice/NewProductsForm";
import { getData } from "@/lib/getData";

const NewProduct = async () => {
  //Categories and FARMERs
  const categoriesData = await getData("categories");
  const usersData = await getData("users");
  const farmersData = usersData.filter((user) => user.role === "FARMER");
  const farmers = farmersData.map((farmer) => {
    return {
      id: farmer.id,
      title: farmer.name,
    };
  });
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });
  return (
    <>
      <NewProductsForm categories={categories} farmers={farmers} />
    </>
  );
};

export default NewProduct;
