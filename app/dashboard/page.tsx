"use client";

import getCurrentUser from "../actions/getCurrentUser";

import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { useCallback, useState } from "react";
import DashNav from "../components/dashboard/DashNav";
import DashContent from "../components/dashboard/DashContent";

export default async function Page() {
  return (
    <div className="bg-gray-100 h-screen overflow-hidden relative lg:p-4">
      <div className="flex items-start">
        <DashNav show />
        <DashContent />
      </div>
    </div>
  );
}
