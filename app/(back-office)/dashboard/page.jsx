import React from "react";
import Heading from "../../components/backoffice/Heading";
import LargeCards from "../../components/backoffice/LargeCards";
import SmallCards from "../../components/backoffice/SmallCards";
import DashboardCharts from "../../components/backoffice/DashboardCharts";
import CustomDataTable from "../../components/backoffice/CustomDataTable";

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
      <CustomDataTable />
    </div>
  );
};

export default page;
