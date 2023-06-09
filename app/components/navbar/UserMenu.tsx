"use client";

import { AiOutlineMenu } from "react-icons/ai";
import { useCallback, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { signOut } from "next-auth/react";

import MenuItem from "./MenuItem";
import Avatar from "../Avatar";
import { SafeUser } from "@/app/types";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
// import useRentModal from "@/app/hooks/useRentModal";
// import Avatar from "../Avatar";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  const router = useRouter();
  const params = useSearchParams();

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const news = () => {
    router.push("/news");
    // toggleOpen();
  };
  const about = () => {
    router.push("/about");
    // toggleOpen();
  };
  const profile = () => {
    router.push("/dashboard");
    toggleOpen();
  };

  const login = () => {
    loginModal.onOpen();
    toggleOpen();
  };
  const signUp = () => {
    registerModal.onOpen();
    toggleOpen();
  };
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={about}
          className="hidden md:block text-sm font-semibold py-2 px-4 rounded-full bg-white transition cursor-pointer text-black  hover:bg-neutral-300 "
        >
          About
        </div>
        {/* <div
          onClick={news}
          className="hidden md:block text-sm font-semibold py-2 px-4 rounded-full bg-white transition cursor-pointer text-black hover:bg-neutral-300 "
        >
          News
        </div> */}
        <div
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rouned-full cursor-pointer hover:shadow-md transition text-white "
          onClick={toggleOpen}
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer text-black">
            {currentUser ? (
              <>
                <MenuItem onClick={profile} label="Dashboard" />
                {/* <MenuItem onClick={news} label="News" /> */}
                <MenuItem onClick={about} label="About" />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={login} label="Login" />
                <MenuItem onClick={signUp} label="Sign up" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
