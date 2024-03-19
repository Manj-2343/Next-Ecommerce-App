import React from "react";
import PageHeader from "../../../../components/backoffice/PageHeader";
import TableActions from "../../../../components/backoffice/TableActions";

const Coupons = () => {
  return (
    <>
      <div>
        {/* header */}
        <PageHeader
          heading="Coupons"
          href="/dashboard/coupons/new"
          linkTitle="Add Coupon"
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

export default Coupons;
