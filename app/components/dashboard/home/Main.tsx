"use client";

import { useEffect, useRef, useState } from "react";
import MobileNav from "../MobileDash";
import Header from "../Header";
import Content from "./Content";
import Map from "../map/Map";
import Houses from "../houses/Houses";
import useSideBar from "@/app/hooks/useSideBar";
import Calendar from "../calendar/Calendar";
import Settings from "../settings/Settings";
import { SafeUser } from "@/app/types";

const style = {
  open: "lg:w-full",
  close: "lg:pl-4 lg:w-[calc(100%-16rem)]",
  mainContainer: `flex flex-col w-full h-screen pl-0 space-y-4`,
  container: `bg-gray-100 h-screen overflow-hidden relative lg:p-4`,
  main: `h-screen overflow-auto pb-36 pt-8 px-2 md:pb-8 md:pt-4 lg:pt-0`,
};

interface MainProps {
  currentUser?: SafeUser | null;
}

const Main: React.FC<MainProps> = ({ currentUser }) => {
  const sideNavRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const sideBar = useSideBar();

  function handleClickOutside(event: any) {
    if (
      sideNavRef.current &&
      !sideNavRef.current.contains(event.target) &&
      headerRef.current &&
      !headerRef.current.contains(event.target)
    ) {
      if (window.innerWidth < 1024) {
        sideBar.sideBarOff();
      }
      // Clicked outside the side navigation bar, close it
      // Implement your close side navigation bar logic here
    }
  }
  useEffect(() => {
    // Add event listener to the document object
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className=" h-screen overflow-hidden relative lg:p-4">
      <div className="flex items-start">
        <>
          <div ref={sideNavRef}>
            <MobileNav isOpen={sideBar.isOpen} />
          </div>

          <div
            className={`${style.mainContainer} 
          ${sideBar.isOpen ? style.open : style.close}`}
          >
            <div ref={headerRef}>
              <Header
                closeSideBar={sideBar.toggleSideBar}
                isOpen={sideBar.isOpen}
                currentUser={currentUser}
              />
            </div>
            <div className="">
              {sideBar.page === "Dashboard" && <Content />}
              {sideBar.page === "Houses" && <Houses />}
              {sideBar.page === "Map" && <Map isOpen={sideBar.isOpen} />}
              {sideBar.page === "Calendar" && <Calendar />}
              {sideBar.page === "Settings" && <Settings />}
            </div>
          </div>
        </>
      </div>
    </div>
  );
};
export default Main;
