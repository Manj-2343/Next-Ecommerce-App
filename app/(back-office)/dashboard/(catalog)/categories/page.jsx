import React from "react";
import PageHeader from "../../../../components/backoffice/PageHeader";
import TableActions from "../../../../components/backoffice/TableActions";

const Categories = () => {
  return (
    <div>
      {/* header */}
      <PageHeader
        heading="Category"
        href="/dashboard/categories/new"
        linkTitle="Add Category"
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

export default Categories;
