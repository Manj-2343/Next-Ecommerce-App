"use client";
import { X } from "lucide-react";
import React from "react";
import { useRouter } from 'next/navigation';

const FormHeader = ({ title }) => {
    const router = useRouter();
  return (
    <div className="flex items-center justify-between py-6 px-12 bg-white text-slate-800 dark:text-slate-50 dark:bg-slate-800 rounded-md shadow-md mb-12">
      <h1 className="text-xl font-semibold">{title}</h1>
      <button onClick={() => router.back()} className="">
        <X />
      </button>
    </div>
  );
};

export default FormHeader;
