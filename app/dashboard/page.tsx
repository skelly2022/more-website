"use client";

import getCurrentUser from "../actions/getCurrentUser";

import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { useCallback, useState } from "react";
import useSideBar from "../hooks/useSideBar";
import Overlay from "../hooks/dash/overlay";
import { useToggle } from "../hooks/dash/context";
const style = {
  open: "lg:w-full",
  close: "lg:pl-4 lg:w-[calc(100%-16rem)]",
  mainContainer: `flex flex-col w-full h-screen pl-0 lg:space-y-4`,
  container: `bg-gray-100 h-screen overflow-hidden relative lg:p-4`,
  main: `h-screen overflow-auto pb-36 pt-8 px-2 md:pb-8 md:pt-4 lg:pt-0`,
};

export default async function Page() {
  const open = useSideBar();
  return <div className="">Hey Dude!!!</div>;
}
