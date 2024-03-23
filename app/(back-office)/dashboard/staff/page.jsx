import React from "react";
import PageHeader from "../../../components/backoffice/PageHeader";
import TableActions from "../../../components/backoffice/TableActions";

const page = () => {
  return (
    <>
      {/* header */}
      <PageHeader
        heading="Our Staffs"
        href="/dashboard/staff/new"
        linkTitle="Add Staffs"
      />
      {/* table actions */}
      {/* export  //search // Bulk Delete  */}
      <TableActions />
      <div className="py-8">
        <h1>Table </h1>
      </div>
    </>
  );
};

export default page;
