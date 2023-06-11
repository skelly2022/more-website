"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <h1 className="text-6xl text-red-500">more</h1>
    // <Image
    //   onClick={() => router.push("/")}
    //   alt="Logo"
    //   className="md:block cursor-pointer"
    //   height="100"
    //   width="100"
    //   src="/images/logo.png"
    // />
  );
};

export default Logo;
