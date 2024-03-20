import React from "react";
import PageHeader from "../../../components/backoffice/PageHeader";
import TableActions from "../../../components/backoffice/TableActions";

const page = () => {
  return (
    <>
      <div>
        {/* header */}
        <PageHeader
          heading="Farmers"
          href="/dashboard/farmers/new"
          linkTitle="Add Farmers"
        />
        {/* table actions */}
        {/* export  //search // Bulk Delete  */}
        <TableActions />
        <div className="py-8">
          <h1>Table </h1>
        </div>
      </div>
    </>
  );
};

export default page;
