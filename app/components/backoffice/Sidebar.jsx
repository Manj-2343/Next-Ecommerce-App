import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-slate-700 space-y-6 w-60 min-h-screen text-slate-50 p-3 fixed left-0 top-0">
      {/* logo */}
      <Link className="mb-6" href="#">
        Logo
      </Link>
      <div className="space-y-4 flex flex-col">
        <Link href="#">DashBoard</Link>
        <Link href="#">Catalog</Link>
        <Link href="#">Customers</Link>
        <Link href="#">Markets</Link>
        <Link href="#">Farmers</Link>
        <Link href="#">Staffs</Link>
        <Link href="#">Settings</Link>
        <Link href="#">Online Store</Link>
      </div>
    </div>
  );
};

export default Sidebar;