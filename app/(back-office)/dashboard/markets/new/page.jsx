import React from "react";
import NewMarket from "../../../../components/backoffice/NewMarketForm";
import { getData } from "@/lib/getData";

const page = async () => {
  // get category data
  const categoriesData = await getData("categories");
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });
  return (
    <>
      <NewMarket categories={categories} />
    </>
  );
};

export default page;
