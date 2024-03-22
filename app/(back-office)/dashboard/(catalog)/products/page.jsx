import React from "react";
import PageHeader from "../../../../components/backoffice/PageHeader";
import TableActions from "../../../../components/backoffice/TableActions";

const Page = () => {
  return (
    <>
      <div>
        {/* header */}
        <PageHeader
          heading="Products"
          href="/dashboard/products/new"
          linkTitle="Add Products"
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

export default Page;
