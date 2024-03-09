import React from "react";
import Heading from "../../components/backoffice/Heading";
import LargeCards from "../../components/backoffice/LargeCards";
import SmallCards from "../../components/backoffice/SmallCards";
import DashboardCharts from "../../components/backoffice/DashboardCharts";

const page = () => {
  return (
    <div>
      <Heading title="DashBoard OverView" />
      {/* Large Cards*/}
      <LargeCards />
      {/* small cards */}
      <SmallCards />
      {/* charts */}
      <DashboardCharts />
      {/* recentOrders Table */}
    </div>
  );
};

export default page;
