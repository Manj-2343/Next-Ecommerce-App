"use client";
// import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import SubmitButton from "../FormInputs/SubmitButton";
import TextInput from "../FormInputs/TextInput";
import { UserRole } from "@prisma/client";

export default function RegisterForm({ role = "USER" }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [emailErr, setEmailErr] = useState("");
  async function onSubmit(data) {
    try {
      console.log(data);
      setLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          role: role === "USER" ? UserRole.USER : UserRole.FARMER,
        }),
      });
      const responseData = await response.json();
      if (response.ok) {
        console.log(responseData);
        setLoading(false);
        toast.success("User Created Successfully");
        reset();
        // if role = user =>home page
        // if role=farmer =>onBoardingPage
        // const userRole = responseData.data.role
        if (role === "USER") {
          router.push("/");
        } else {
          router.push(`/onboarding/${responseData.data.id}`);
        }
      } else {
        setLoading(false);
        if (response.status === 409) {
          setEmailErr("User with this Email already exists");
          toast.error("User with this Email already exists");
        } else {
          // Handle other errors
          console.error("Server Error:", responseData.error);
          toast.error("Oops Something Went wrong");
        }
      }
    } catch (error) {
      setLoading(false);
      console.error("Network Error:", error);
      toast.error("Something Went wrong, Please Try Again");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <TextInput
        label=""
        name="role"
        register={register}
        errors={errors}
        type="hidden"
        defaultValue={role}
        className="sm:col-span-2"
      />
      <TextInput
        label="Your Name"
        name="name"
        register={register}
        errors={errors}
        type="text"
        className="sm:col-span-2"
      />
      <TextInput
        label="Email Address"
        name="email"
        register={register}
        errors={errors}
        type="email"
        className="sm:col-span-2"
      />
      {emailErr && <small className="text-red-600">{emailErr}</small>}
      <TextInput
        label="Password"
        name="password"
        register={register}
        errors={errors}
        type="password"
        className="sm:col-span-2"
      />
      <SubmitButton
        isLoading={loading}
        buttonTitle="Register"
        loadingButtonTitle="Registering please wait..."
      />
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-lime-600 hover:underline dark:text-lime-500"
        >
          Login
        </Link>
      </p>
    </form>
  );
}
