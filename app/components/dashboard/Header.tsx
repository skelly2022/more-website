import { SafeUser } from "@/app/types";
import Avatar from "../Avatar";

interface HeaderProps {
  closeSideBar: (isOpen: boolean) => void;
  isOpen: boolean;
  currentUser?: SafeUser | null;
}
const Header: React.FC<HeaderProps> = ({
  closeSideBar,
  isOpen,
  currentUser,
}) => {
  return (
    <header className="bg-white h-16 items-center relative shadow w-full z-10 md:h-20 lg:rounded-2xl">
      <div className="flex flex-center flex-col h-full justify-center mx-auto px-3 relative">
        <div className="flex items-center pl-1 relative w-full sm:pr-2 sm:ml-0 lg:max-w-68">
          <div className="flex h-full left-0 relative w-3/4">
            <div className="group flex items-center h-full relative w-12">
              <button
                type="button"
                aria-expanded="false"
                aria-label="Toggle sidenav"
                className="text-4xl text-gray-500 focus:outline-none"
                onClick={() => closeSideBar(isOpen)}
              >
                &#8801;
              </button>
            </div>
          </div>
          <div className="flex items-center justify-end ml-5 p-1 relative w-1/4 sm:mr-0 sm:right-auto">
            <a href="#" className="block relative">
              <Avatar src={currentUser?.image} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
