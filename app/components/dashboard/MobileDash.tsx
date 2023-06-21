"use client";

import { MdSpaceDashboard } from "react-icons/md";
import { BsHouseCheck } from "react-icons/bs";
import { BsFillPinMapFill } from "react-icons/bs";
import { AiFillCalendar } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { useCallback, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signOut } from "next-auth/react";

import qs from "query-string";
import NavItem from "./components/NavItem";
import useSideBar from "@/app/hooks/useSideBar";
import Logo from "../navbar/Logo";

interface MobileNavProps {
  isOpen?: any;
}

export const categories = [
  {
    label: "Dashboard",
    icon: MdSpaceDashboard,
  },
  {
    label: "Houses",
    icon: BsHouseCheck,
  },
  {
    label: "Map",
    icon: BsFillPinMapFill,
  },
  {
    label: "Calendar",
    icon: AiFillCalendar,
  },
  {
    label: "Settings",
    icon: FiSettings,
  },
];
const style = {
  mobilePosition: {
    left: "left-0",
    right: "right-0",
  },
  container: `pb-32 lg:pb-6`,
  close: `hidden lg:block lg:w-64 lg:z-auto`,
  open: `w-8/12 absolute z-40 sm:w-5/12 lg:hidden`,
  default: `bg-white h-screen overflow-y-auto top-0 lg:relative`,
};
const MobileNav: React.FC<MobileNavProps> = ({ isOpen }) => {
  const params = useSearchParams();
  const sideBar = useSideBar(); // const [open, setOpen] = useState(true);
  return (
    <aside
      className={`${style.default} ${style.mobilePosition["right"]} 
  ${isOpen ? style.open : style.close} `}
    >
      <div className="pb-32 lg:pb-6">
        <div className="w-full relative flex items-center justify-center">
          <Logo />
        </div>
        <ul>
          <li>
            {categories.map((item) => (
              <NavItem
                key={item.label}
                label={item.label}
                selected={sideBar.page === item.label}
                icon={item.icon}
              />
            ))}
          </li>
        </ul>
      </div>
      <div className="w-100 h-50 flex items-center p-4">
        <button
          onClick={() => signOut()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign Out
        </button>
      </div>
    </aside>
  );
};

export default MobileNav;
