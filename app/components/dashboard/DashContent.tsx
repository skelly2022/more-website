"use client";

import Card from "./components/Card";

// import { Grid, Col, Card, Text, Metric } from "@tremor/react";

const DashContent = () => {
  return (
    <div className="flex flex-col w-full h-auto pl-4 lg:space-y-4 ">
      <main className="h-screen overflow-auto pb-36 pt-8 px-2 md:pb-8 md:pt-4 lg:pt-0">
        <div className="flex flex-col flex-wrap sm:flex-row gap-2">
          <Card />
          <Card />
        </div>
      </main>
    </div>
  );
};

export default DashContent;
