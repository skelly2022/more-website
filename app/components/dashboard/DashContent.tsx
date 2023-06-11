"use client";

import useSideBar from "@/app/hooks/useSideBar";
import Card from "./components/Card";
import { GiHamburgerMenu } from "react-icons/gi";
import { useCallback } from "react";
import { signOut } from "next-auth/react";

// import { Grid, Col, Card, Text, Metric } from "@tremor/react";

// interface DashContentProps {
//   useShow: () => void;
// }

const DashContent = () => {
  return (
    <div className="flex flex-col w-full h-auto pl-0 sm:pl-4 lg:space-y-4 ">
      <main className="h-screen overflow-auto pb-36 pt-8 px-2 md:pb-8 md:pt-4 lg:pt-0">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded text-sm w-20 hover:bg-blue-700"
          onClick={() => signOut()}
        >
          X
        </button>
        <div className="flex flex-col flex-wrap sm:flex-row gap-2">
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
};

export default DashContent;
