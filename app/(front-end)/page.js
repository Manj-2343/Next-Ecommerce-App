import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen">
      <h2 className="text-4xl">Ecommerce App</h2>
      <Link href="/register-farmer" className="my-4 underline">
        Become a Farmer/vender/supplier
      </Link>
    </div>
  );
}
