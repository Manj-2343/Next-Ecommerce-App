import React from "react";
import Heading from "./Heading";
import Link from "next/link";
import { Plus } from "lucide-react";

const PageHeader = ({ linkTitle, heading, href }) => {
  return (
    <>
      {/* header */}
      <div className="flex justify-between py-4 mb-4">
        <Heading title={heading} />
        <Link
          className="text-white bg-lime-600 hover:bg-lime-600/90 focus:ring-4 focus:outline-none focus:ring-lime-600/50 font-medium rounded-lg text-lg px-5 py-3 space-x-3 text-center inline-flex items-center dark:focus:ring-lime-600/55 me-2"
          href={href}
        >
          <Plus />
          <span>{linkTitle}</span>
        </Link>
      </div>
    </>
  );
};

export default PageHeader;
