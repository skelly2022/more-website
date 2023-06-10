"use client";

import Card from "./components/Card";
import { GiHamburgerMenu } from "react-icons/gi";

// import { Grid, Col, Card, Text, Metric } from "@tremor/react";

const DashContent = () => {
  return (
    <div className="flex flex-col w-full h-auto pl-0 sm:pl-4 lg:space-y-4 ">
      <main className="h-screen overflow-auto pb-36 pt-8 px-2 md:pb-8 md:pt-4 lg:pt-0">
        <div className="flex flex-col flex-wrap sm:flex-row gap-2">
          <button className="bg-blue-500 text-white py-2 px-4 rounded text-sm w-20 hover:bg-blue-700">
            <GiHamburgerMenu size={20}/>
          </button>

          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
};

export default DashContent;
