import React from "react";
import NewFarmerForm from "../../../components/backoffice/NewFarmerForm";
import { getData } from "@/lib/getData";

const page = async ({ params: { id } }) => {
  const user = await getData(`users/${id}`);
  console.log(user);
  return (
    <div className="flex flex-col gap-4 p-16">
      <div className="max-w-4xl p-4 mx-auto ">
        <h2 className="font-semibold">Tell {user?.name} More About YourSelf</h2>
      </div>
      <NewFarmerForm user={user} />
    </div>
  );
};
export default page;
