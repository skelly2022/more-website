"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    // <div className="h-20 relative">
    <Image
      onClick={() => router.push("/")}
      alt="Logo"
      className="md:block cursor-pointer"
      height={150}
      width={150}
      src="/images/logov1bg.png"
    />
    // </div>
  );
};

export default Logo;
