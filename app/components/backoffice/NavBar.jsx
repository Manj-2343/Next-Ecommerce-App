import { AlignJustify, Bell, Sun, User } from "lucide-react";
import React from "react";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between bg-slate-800 text-slate-50  h-16 px-8 py-4 fixed top-0 w-full left-60 right-0 pl-30 z-40">
      {/* Icons */}
      <button>
        <AlignJustify />
      </button>
      {/* 3Icons */}
      <div className="flex space-x-3">
        <button>
          <Sun />
        </button>
        <button>
          <Bell />
        </button>
        <button>
          <User />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
