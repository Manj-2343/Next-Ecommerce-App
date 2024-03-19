import { Download, Search, Trash2 } from "lucide-react";
import React from "react";

const TableActions = () => {
  return (
    <>
      <div className="flex justify-between py-6 px-12 bg-gray-200 dark:bg-slate-700 rounded-lg items-center gap-8 mt-12">
        <button className="relative inline-flex items-center justify-center py-3 px-4 text-base space-x-3 font-medium  rounded-lg group bg-slate-100 dark:bg-slate-800 text-gray-400 hover:text-gray-900 border border-lime-400    dark:text-white focus:ring-2 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800">
          <Download />
          <span >Export</span>
        </button>
        {/* search */}
        <div className=" flex-grow  ">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative ">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-500" />
            </div>
            <input
              type="text"
              id="table-search"
              className="block py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  bg-gray-50 focus:ring-lime-500 focus:border-lime-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-lime-500 dark:focus:border-lime-500 w-full"
              placeholder="Search for items"
            />
          </div>
        </div>
        {/* delete */}
        <button className="flex items-center space-x-2 bg-red-600 text-white rounded-lg px-6 py-3">
          <Trash2 />
          <span>Bulk Delete</span>
        </button>
      </div>
    </>
  );
};

export default TableActions;
