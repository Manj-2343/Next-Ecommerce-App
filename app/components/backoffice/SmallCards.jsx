import React from "react";
import LargeCard from "./LargeCard";
import SmallCard from "./SmallCard";
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from "lucide-react";

const SmallCards = () => {
  const orderStatus = [
    {
      title: "Total Orders",
      number: 210,
      iconBg: "bg-green-600",
      icon: ShoppingCart,
    },
    {
      title: "Orders Pending",
      number: 220,
      iconBg: "bg-blue-600",
      icon: CheckCheck,
    },
    {
      title: "Order Processing",
      number: 230,
      iconBg: "bg-orange-600",
      icon: RefreshCcw,
    },
    {
      title: "Order Delivered",
      number: 240,
      iconBg: "bg-purple-600",
      icon: Loader2,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-col-4 gap-4 py-8">
      {orderStatus.map((data, i) => {
        return <SmallCard key={i} data={data} />;
      })}
    </div>
  );
};

export default SmallCards;
