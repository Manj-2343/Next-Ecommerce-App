import React from "react";
import NewCommunity from "../../../../components/backoffice/NewTrainingForm";
import { getData } from "@/lib/getData";

const NewTraining = async () => {
  // get marketData
  const categoriesData = await getData("categories");
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });
  return (
    <div>
      <NewCommunity categories={categories} />
    </div>
  );
};

export default NewTraining;
