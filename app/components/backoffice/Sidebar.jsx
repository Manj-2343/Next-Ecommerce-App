"use client";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../public/Logo1.png";
import Image from "next/image";
import {
  Boxes,
  Building,
  Building2,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  ExternalLink,
  LayoutGrid,
  LayoutList,
  LogOut,
  MonitorPlay,
  ScanSearch,
  SendToBack,
  Settings,
  Slack,
  Truck,
  User,
  User2,
  UserSquare2,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { usePathname } from "next/navigation";
const Sidebar = ({ showSideBar, setShowSideBar }) => {
  const pathName = usePathname();
  const sidebarLinks = [
    {
      title: "Customers",
      icon: User,
      href: "/dashboard/customers",
    },
    {
      title: "Markets",
      icon: Building,
      href: "/dashboard/markets",
    },
    {
      title: "Farmers",
      icon: UserSquare2,
      href: "/dashboard/farmers",
    },
    {
      title: "Orders",
      icon: Truck,
      href: "/dashboard/orders",
    },
    {
      title: "Our Staffs",
      icon: User2,
      href: "/dashboard/staff",
    },
    {
      title: "Biswal Community",
      icon: Building2,
      href: "/dashboard/community",
    },
    {
      title: "Wallet",
      icon: CircleDollarSign,
      href: "/dashboard/wallet",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
    {
      title: "Online Store",
      icon: ExternalLink,
      href: "/",
    },
  ];
  const catalogLinks = [
    {
      title: "Products",
      icon: Boxes,
      href: "/dashboard/products",
    },
    {
      title: "Categories",
      icon: LayoutList,
      href: "/dashboard/categories",
    },
    {
      title: "Coupons",
      icon: ScanSearch,
      href: "/dashboard/coupons",
    },
    {
      title: "Store Banners",
      icon: MonitorPlay,
      href: "/dashboard/banners",
    },
  ];
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div
      className={
        showSideBar
          ? "sm:block mt-20 sm:mt-0 dark:bg-slate-800 bg-white space-y-6 w-60 h-screen dark:text-slate-50 fixed left-0 top-0 shadow-xl overflow-y-scroll"
          : "mt-20  sm:mt-0 hidden sm:block dark:bg-slate-800 bg-white space-y-6 w-60 h-screen dark:text-slate-50 fixed left-0 top-0 shadow-xl overflow-y-scroll"
      }
    >
      {/* logo */}
      <div
        onClick={() => setShowSideBar(false)}
        className="relative w-40 h-20 overflow-hidden  rounded-lg"
      >
        <Image
          src={logo}
          alt="My Image"
          layout="fill"
          objectFit="contain"
          className="rounded-lg"
        />
        <div className="absolute inset-0  opacity-90 rounded-lg"></div>
      </div>
      <div className="space-y-4 flex flex-col">
        <Link
          onClick={() => setShowSideBar(false)}
          href="/dashboard"
          className={
            pathName == "/dashboard"
              ? "flex items-center space-x-3 py-1 px-6 border-l-8 border-lime-600 text-lime-600"
              : "flex items-center space-x-3 py-1 px-6"
          }
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>
        <Collapsible className="px-6 py-0">
          <CollapsibleTrigger onClick={() => setOpenMenu(!openMenu)}>
            <button className={"flex items-center space-x-6 py-2"}>
              <div className="flex items-center space-x-3">
                <Slack />
                <span>Catalog</span>
              </div>
              {!openMenu ? <ChevronRight /> : <ChevronDown />}
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="px-3 pl-6 py-1 dark:bg-slate-800 dark:text-slate-300 rounded-sm">
            {catalogLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  onClick={() => setShowSideBar(false)}
                  key={i}
                  href={item.href}
                  className={
                    pathName == item.href
                      ? "flex items-center space-x-3 py-1   text-lime-600 "
                      : "flex items-center space-x-3 py-1 "
                  }
                >
                  <Icon className="w-4 h-4 " />
                  <span className="text-sm font-semibold">{item.title}</span>
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>
        {sidebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              onClick={() => setShowSideBar(false)}
              href={item.href}
              key={i}
              className={
                item.href === pathName
                  ? "flex items-center space-x-3 py-1 px-6 border-l-8 border-lime-600 text-lime-600"
                  : "flex items-center space-x-3 py-1 px-6"
              }
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}
        <div className="py-1 px-6">
          <button className="bg-lime-600 rounded-md flex items-center space-x-3 px-6 py-3">
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
