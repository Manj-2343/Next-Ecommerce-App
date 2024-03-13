import React from "react";
import Sidebar from "../components/backoffice/Sidebar";
import NavBar from "../components/backoffice/NavBar";

const layout = ({ children }) => {
  return (
    <div className="flex ">
      {/* sidebar */}
      <Sidebar />
      <div className="w-full  flex-grow bg-slate-100">
        {/* Header */}
        <NavBar />
        <main className=" ml-60 p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 min-h-screen mt-16">
          {children}
        </main>
        {/* Main */}
      </div>
      {/* main Body */}
    </div>
  );
};

export default layout;
