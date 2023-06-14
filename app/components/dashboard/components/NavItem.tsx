import useSideBar from "@/app/hooks/useSideBar";
import { useSearchParams, useRouter } from "next/navigation";
import qs from "query-string";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface NavItemProps {
  label: string;
  icon: IconType;
  selected?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, icon: Icon, selected }) => {
  const sideBar = useSideBar();
  return (
    <a onClick={() => sideBar.changePage(label)}>
      <span
        className={`${
          selected
            ? "duration-200 flex font-thin items-center justify-start my-2 p-4 transition-colors text-gray-500 uppercase w-full hover:text-blue-500 bg-gradient-to-r border-r-4 border-blue-500 from-white to-blue-100"
            : "duration-200 flex font-thin items-center justify-start my-2 p-4 transition-colors text-gray-500 uppercase w-full hover:text-blue-500 false cursor-pointer hover:bg-neutral-300"
        } `}
      >
        <span>
          <Icon size={26} />
        </span>
        <span className="font-normal mx-4 text-sm">{label}</span>
      </span>
    </a>
  );
};

export default NavItem;
