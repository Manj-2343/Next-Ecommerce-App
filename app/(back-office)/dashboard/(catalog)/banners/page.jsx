import React from "react";
import PageHeader from "../../../../components/backoffice/PageHeader";
import TableActions from "../../../../components/backoffice/TableActions";

const Banners = () => {
  return (
    <div>
      {/* header */}
      <PageHeader
        heading="Category"
        href="/dashboard/banners/new"
        linkTitle="Add Banner"
      />
      {/* table actions */}
      {/* export  //search // Bulk Delete  */}
      <TableActions />
      <div className="py-8">
        <h1>Table </h1>
      </div>
    </div>
  );
};

export default Banners;
