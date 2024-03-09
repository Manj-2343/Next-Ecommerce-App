import React from "react";
import LargeCard from "./LargeCard";

const LargeCards = () => {
  const orderStates = [
    {
      period: "Today Orders",
      sales: 11000000,
      color: "bg-green-600",
    },
    {
      period: "Yesterday Orders",
      sales: 12000000,
      color: "bg-blue-600",
    },
    {
      period: "This Months",
      sales: 13000000,
      color: "bg-orange-600",
    },
    {
      period: "All time Sales",
      sales: 14000000,
      color: "bg-purple-600",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-4 py-8">
      {orderStates.map((item, i) => {
        return <LargeCard className="bg-green-600" data={item} key={i} />;
      })}
    </div>
  );
};

export default LargeCards;
