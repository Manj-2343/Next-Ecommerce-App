"use client";
import React, { useState } from "react";
import Sidebar from "../components/backoffice/Sidebar";
import NavBar from "../components/backoffice/NavBar";

const Layout = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <div className="flex">
      {/* sidebar */}
      <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <div className=" lg:ml-60 ml-0   flex-grow bg-slate-100 min-h-screen">
        {/* Header */}
        <NavBar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <main className=" p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 min-h-screen mt-16">
          {children}
        </main>
        {/* Main */}
      </div>
      {/* main Body */}
    </div>
  );
};

export default Layout;
