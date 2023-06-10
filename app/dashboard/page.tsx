"use client";
import Container from "../components/Container";
import { Grid, Col, Card, Text, Metric } from "@tremor/react";
import DashNav from "../components/dashboard/DashNav";
import DashContent from "../components/dashboard/DashContent";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const params = useSearchParams();

  useEffect(() => {
    console.log(params);
  }, [params]);
  return (
    <div className="bg-gray-100 h-screen overflow-hidden relative lg:p-4">
      <div className="flex items-start">
        <DashNav />
        <DashContent />
      </div>
    </div>
  );
};

export default Page;
