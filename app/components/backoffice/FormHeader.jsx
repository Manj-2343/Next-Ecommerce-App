import { X } from "lucide-react";
import React from "react";

const FormHeader = ({ title }) => {
  return (
    <>
      <div className="flex items-center justify-between py-6 px-12 bg-white text-slate-800 dark:text-slate-50 dark:bg-slate-800 rounded-md shadow-md">
        <h1 className="text-xl font-semibold">{title}</h1>
        <button className="">
          <X />
        </button>
      </div>
    </>
  );
};

export default FormHeader;
