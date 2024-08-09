"use client";
import {
 ArrowLeftStartOnRectangleIcon,
 ChartPieIcon,
 UserGroupIcon,
} from "@heroicons/react/24/outline";

import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { UsersIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";
import { useRef, useEffect, useState, useCallback } from "react";
import { useSidebar } from "./sidebarContext";
import Image from "next/image";

const Sidebar = () => {
 const { isSidebarOpen, toggleSidebar } = useSidebar(); // Get the context values
 const [isHovered, setIsHovered] = useState<boolean>(false);
 //  const [isOpenByClick, setIsOpenByClick] = useState<boolean>(false);
 const sidebarRef = useRef<HTMLDivElement>(null);

 // Function to handle clicks
 const handleClick = useCallback(
  (event: MouseEvent) => {
   const mobileSidebar = document.querySelector(".sidebar-mobile");
   if (mobileSidebar && mobileSidebar.contains(event.target as Node)) {
    return;
   }
   setIsHovered(false);
   // If the sidebar is open by click, close it when clicking outside
   if (isSidebarOpen) {
    toggleSidebar();
   }
  },
  [isSidebarOpen, toggleSidebar]
 );

 const handleMobileSidebarClick = (event: React.MouseEvent) => {
  event.stopPropagation();
  toggleSidebar();
 };

 // Set up the event listener for clicks
 useEffect(() => {
  document.addEventListener("click", handleClick);

  // Clean up the event listener on component unmount
  return () => {
   document.removeEventListener("click", handleClick);
  };
 }, [handleClick]); // Depend on handleClick to ensure the effect is re-run

 return (
  <>
   {/* Desktop relaive sidebar */}
   <div
    id="sidebar-desktop"
    className="w-2/12 xl:w-[15%] flex-shrink-0 lg:flex lg:!h-screen hidden bg-custom-dark h-full overflow-y-auto  items-center flex-col custom-scrollbar scrollbar-hidden"
   >
  
     <Image
      src="/dougi.png"
      alt="Douginas"
      className="object-contain py-5  border-b-[0.2px] border-slate-600"
      width={150}
      height={140}
     />
    <div className="flex flex-col h-full w-full justify-between">
     <div>
      <div className="pt-7 ">
       <h2 className="text-custom-gray 2xl:pl-[19%] pb-4 font-semibold pl-[12%]">
        Main Menu
       </h2>

       <ul className="text-white">
        <li className="flex pl-[12%] 2xl:pl-[19%]  items-center gap-5 py-3 hover:bg-gradient-to-r hover:from-custom-green/30 hover:via-custom-green/15 hover:via-30% hover:to-custom-green/5 hover:to-70% hover:text-custom-green cursor-pointer transition-all  ">
         {" "}
         <svg
          xmlns="http://www.w3.org/2000/svg"
          height="28px"
          viewBox="0 -960 960 960"
          width="28px"
          className=""
          fill="currentColor"
         >
          <path d="M666-440 440-666l226-226 226 226-226 226Zm-546-80v-320h320v320H120Zm400 400v-320h320v320H520Zm-400 0v-320h320v320H120Z" />
         </svg>
         <h2 className="!text-white hover:text-white">Home</h2>
        </li>
        <li className="flex pl-[12%] 2xl:pl-[19%]  items-center gap-5 py-3 hover:bg-gradient-to-r hover:from-custom-green/30 hover:via-custom-green/15 hover:via-30% hover:to-custom-green/5 hover:to-70% hover:text-custom-green cursor-pointer transition-all ">
         <ClockIcon className="w-7 " /> History
        </li>
        <li className="flex pl-[12%] 2xl:pl-[19%]  items-center gap-5 py-3 hover:bg-gradient-to-r hover:from-custom-green/30 hover:via-custom-green/15 hover:via-30% hover:to-custom-green/5 hover:to-70% hover:text-custom-green cursor-pointer transition-all ">
         <ChartPieIcon className="w-7 " /> Supplies
        </li>
        <li className="flex pl-[12%] 2xl:pl-[19%]  items-center gap-5 py-3 hover:bg-gradient-to-r hover:from-custom-green/30 hover:via-custom-green/15 hover:via-30% hover:to-custom-green/5 hover:to-70% hover:text-custom-green cursor-pointer transition-all ">
         {" "}
         <UsersIcon className="w-7 " /> Waitlist
        </li>
       </ul>
      </div>

      <div>
       <h3 className="text-custom-gray pl-[12%] 2xl:pl-[19%]  pb-4 pt-7 font-semibol ">
        General
       </h3>
       <ul className="text-white">
        <li className="flex pl-[12%] 2xl:pl-[19%]  items-center gap-5 py-3 hover:bg-gradient-to-r hover:from-custom-green/30 hover:via-custom-green/15 hover:via-30% hover:to-custom-green/5 hover:to-70% hover:text-custom-green cursor-pointer transition-all">
         <Cog6ToothIcon className="w-7 " />
         Settings
        </li>
        <li className="flex pl-[12%] 2xl:pl-[19%]  items-center gap-5 py-3 hover:bg-gradient-to-r hover:from-custom-green/30 hover:via-custom-green/15 hover:via-30% hover:to-custom-green/5 hover:to-70% hover:text-custom-green cursor-pointer transition-all">
         <UserGroupIcon className="w-7 " /> Community
        </li>
       </ul>
      </div>
     </div>
     <div className="flex text-white pt-16 ">
      <button className="flex pl-[12%] 2xl:pl-[19%]  items-center gap-5 py-3 w-full  hover:bg-gradient-to-r hover:from-custom-green/30 hover:via-custom-green/15 hover:via-30% hover:to-custom-green/5 hover:to-70% hover:text-custom-green cursor-pointer transition-all">
       <ArrowLeftStartOnRectangleIcon className="w-7 " />
       Logout
      </button>
     </div>
    </div>
   </div>

   {/* Mobile sidebar */}
   <div
    className="sidebar-mobile p-4 hidden md:block bg-custom-dark text-white cursor-pointer lg:hidden"
    onMouseEnter={() => !isSidebarOpen && setIsHovered(true)}
    onClick={handleMobileSidebarClick}
   >
    <ul className="flex flex-col justify-between h-full items-center py-6">
     <li>
      {" "}
      <svg
       className="w-10 h-10"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 -960 960 960"
      >
       <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
         <stop offset="0%" style={{ stopColor: "#07AF29", stopOpacity: 1 }} />3
         <stop offset="100%" style={{ stopColor: "#07AF", stopOpacity: 1 }} />
        </linearGradient>
       </defs>
       <path
        fill="url(#grad1)"
        d="M160-80q-33 0-56.5-23.5T80-160v-480q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v480q0 33-23.5 56.5T800-80H160Zm240-640h160v-80H400v80Zm40 360v120h80v-120h120v-80H520v-120h-80v120H320v80h120Z"
       />
      </svg>
     </li>
     <li>
      <ClockIcon className="w-7 " />
     </li>
     <li>
      <ChartPieIcon className="w-7 " />
     </li>
     <li>
      <UsersIcon className="w-7 " />
     </li>
     <li>
      <Cog6ToothIcon className="w-7 " />
     </li>
     <li>
      <UserGroupIcon className="w-7 " />
     </li>
     <li>
      <ArrowLeftStartOnRectangleIcon className="w-7 " />
     </li>
    </ul>
   </div>

   {/* Desktop fixed sidebar */}
   <div
    ref={sidebarRef}
    className={`sidebar-desktop lg:hidden flex flex-col flex-shrink-0 w-[35%] md1:w-[27%] md:w-[24%] md3:w-[24%] md4:w-[22%] z-20 overflow-y-auto custom-scrollbar scrollbar-hidden bg-custom-dark h-ful fixed left-0 top-0 h-full text-white transition-transform duration-500 ${
     isHovered || isSidebarOpen
      ? "transform translate-x-0 ease-in-out"
      : "transform -translate-x-full ease-in-out"
    }`}
   >
    {" "}
    <div className="flex pt-3 flex-row-reverse gap-3 pb-7 justify-center items-center">
     <Image
      src="/dougi.png"
      alt="Douginas"
      className="object-contain py-5  border-b-[0.2px] border-slate-600"
      width={150}
      height={140}
     />
    </div>
    <div className="flex flex-col h-full w-full justify-between">
     <div>
      <div className="pt-7 ">
       <h2 className="text-custom-gray 2xl:pl-[19%] pb-4 font-semibold pl-[12%]">
        Main Menu
       </h2>

       <ul className="text-white">
        <li className="flex pl-[12%] 2xl:pl-[19%]  items-center gap-5 py-3 hover:bg-gradient-to-r hover:from-custom-green/30 hover:via-custom-green/15 hover:via-30% hover:to-custom-green/5 hover:to-70% hover:text-custom-green cursor-pointer transition-all  ">
         {" "}
         <svg
          xmlns="http://www.w3.org/2000/svg"
          height="28px"
          viewBox="0 -960 960 960"
          width="28px"
          className=""
          fill="currentColor"
         >
          <path d="M666-440 440-666l226-226 226 226-226 226Zm-546-80v-320h320v320H120Zm400 400v-320h320v320H520Zm-400 0v-320h320v320H120Z" />
         </svg>
         <h2 className="!text-white hover:text-white">Home</h2>
        </li>
        <li className="flex pl-[12%] 2xl:pl-[19%]  items-center gap-5 py-3 hover:bg-gradient-to-r hover:from-custom-green/30 hover:via-custom-green/15 hover:via-30% hover:to-custom-green/5 hover:to-70% hover:text-custom-green cursor-pointer transition-all ">
         <ClockIcon className="w-7 " /> History
        </li>
        <li className="flex pl-[12%] 2xl:pl-[19%]  items-center gap-5 py-3 hover:bg-gradient-to-r hover:from-custom-green/30 hover:via-custom-green/15 hover:via-30% hover:to-custom-green/5 hover:to-70% hover:text-custom-green cursor-pointer transition-all ">
         <ChartPieIcon className="w-7 " /> Supplies
        </li>
        <li className="flex pl-[12%] 2xl:pl-[19%]  items-center gap-5 py-3 hover:bg-gradient-to-r hover:from-custom-green/30 hover:via-custom-green/15 hover:via-30% hover:to-custom-green/5 hover:to-70% hover:text-custom-green cursor-pointer transition-all ">
         {" "}
         <UsersIcon className="w-7 " /> Waitlist
        </li>
       </ul>
      </div>

      <div>
       <h3 className="text-custom-gray pl-[12%] 2xl:pl-[19%]  pb-4 pt-7 font-semibol ">
        General
       </h3>
       <ul className="text-white">
        <li className="flex pl-[12%] 2xl:pl-[19%]  items-center gap-5 py-3 hover:bg-gradient-to-r hover:from-custom-green/30 hover:via-custom-green/15 hover:via-30% hover:to-custom-green/5 hover:to-70% hover:text-custom-green cursor-pointer transition-all">
         <Cog6ToothIcon className="w-7 " />
         Settings
        </li>
        <li className="flex pl-[12%] 2xl:pl-[19%]  items-center gap-5 py-3 hover:bg-gradient-to-r hover:from-custom-green/30 hover:via-custom-green/15 hover:via-30% hover:to-custom-green/5 hover:to-70% hover:text-custom-green cursor-pointer transition-all">
         <UserGroupIcon className="w-7 " /> Community
        </li>
       </ul>
      </div>
     </div>

     <div className="flex text-white pt-16 ">
      <button className="flex pl-[12%] 2xl:pl-[19%]  items-center gap-5 py-3 w-full  hover:bg-gradient-to-r hover:from-custom-green/30 hover:via-custom-green/15 hover:via-30% hover:to-custom-green/5 hover:to-70% hover:text-custom-green cursor-pointer transition-all">
       <ArrowLeftStartOnRectangleIcon className="w-7 " />
       Logout
      </button>
     </div>
    </div>
   </div>
  </>
 );
};

export default Sidebar;
