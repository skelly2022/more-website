"use client";

import { MdSpaceDashboard } from "react-icons/md";
import { BsHouseCheck } from "react-icons/bs";

interface DashNavProps {
  show: boolean;
}

const DashNav: React.FC<DashNavProps> = ({ show }) => {
  return (
    <aside
      className={`bg-white h-screen overflow-y-auto top-0 lg:relative right-0 
     hidden lg:block lg:w-64 lg:z-auto style_scrollbar__20XZQ z-10`}
    >
      <div className="pb-32 lg:pb-6">
        <div className="bg-white flex items-center justify-center pt-6 sticky top-0 pb-6 ">
          <svg
            width="35"
            height="30"
            viewBox="0 0 256 366"
            version="1.1"
            preserveAspectRatio="xMidYMid"
          >
            <defs>
              <linearGradient
                x1="12.5189534%"
                y1="85.2128611%"
                x2="88.2282959%"
                y2="10.0225497%"
                id="linearGradient-1"
              >
                <stop stopColor="#FF0057" stopOpacity="0.16" offset="0%"></stop>
                <stop stopColor="#FF0057" offset="86.1354%"></stop>
              </linearGradient>
            </defs>
            <g>
              <path
                d="M0,60.8538006 C0,27.245261 27.245304,0 60.8542121,0 L117.027019,0 L255.996549,0 L255.996549,86.5999776 C255.996549,103.404155 242.374096,117.027222 225.569919,117.027222 L145.80812,117.027222 C130.003299,117.277829 117.242615,130.060011 117.027019,145.872817 L117.027019,335.28252 C117.027019,352.087312 103.404567,365.709764 86.5997749,365.709764 L0,365.709764 L0,117.027222 L0,60.8538006 Z"
                fill="#001B38"
              ></path>
              <circle
                fill="url(#linearGradient-1)"
                transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
                cx="147.013244"
                cy="147.014675"
                r="78.9933938"
              ></circle>
              <circle
                fill="url(#linearGradient-1)"
                opacity="0.5"
                transform="translate(147.013244, 147.014675) rotate(90.000000) translate(-147.013244, -147.014675) "
                cx="147.013244"
                cy="147.014675"
                r="78.9933938"
              ></circle>
            </g>
          </svg>
        </div>
        <ul>
          <li>
            <a href="/">
              <span
                className="duration-200 flex font-thin items-center justify-start my-2 p-4 transition-colors text-gray-500 uppercase w-full lg:hover:text-blue-500 
            bg-gradient-to-r border-r-4 border-blue-500 from-white to-blue-100"
              >
                <span>
                  <MdSpaceDashboard size={20} />{" "}
                </span>
                <span className="font-normal mx-4 text-sm">Dashboard</span>
              </span>
            </a>
            <a href="/">
              <span
                className="duration-200 flex font-thin items-center justify-start my-2 p-4 transition-colors text-gray-500 uppercase w-full lg:hover:text-blue-500 
            false"
              >
                <span>
                  <BsHouseCheck size={20} />
                </span>
                <span className="font-normal mx-4 text-sm">Houses</span>
              </span>
            </a>
            <a href="/">
              <span
                className="duration-200 flex font-thin items-center justify-start my-2 p-4 transition-colors text-gray-500 uppercase w-full lg:hover:text-blue-500 
            false"
              >
                <span>
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="m-auto"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z"></path>
                  </svg>
                </span>
                <span className="font-normal mx-4 text-sm">Map</span>
              </span>
            </a>
            <a href="/">
              <span
                className="duration-200 flex font-thin items-center justify-start my-2 p-4 transition-colors text-gray-500 uppercase w-full lg:hover:text-blue-500 
            false"
              >
                <span>
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="m-auto"
                    viewBox="0 0 2048 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z"></path>
                  </svg>
                </span>
                <span className="font-normal mx-4 text-sm">Calendar</span>
              </span>
            </a>
            <a href="/">
              <span
                className="duration-200 flex font-thin items-center justify-start my-2 p-4 transition-colors text-gray-500 uppercase w-full lg:hover:text-blue-500 
            false"
              >
                <span>
                  <svg
                    width="20"
                    fill="currentColor"
                    height="20"
                    className="h-5 w-5"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"></path>
                  </svg>
                </span>
                <span className="font-normal mx-4 text-sm">Settings</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default DashNav;
