"use client";
import { Bars3Icon, BellIcon } from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import ClientDate from "./clientDate";
import { useSidebar } from "./sidebarContext";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
 const { toggleSidebar } = useSidebar(); // Get the context values
 return (
  <>
   <nav className="flex justify-between xl:w-full items-center   px-5 py-7 border-b-[1px] border-slate-20">
    <div className="items-center gap-2 hidden">
     <svg
      className="w-10 h-10"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
     >
      <defs>
       <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#07AF29", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#07AF", stopOpacity: 1 }} />
       </linearGradient>
      </defs>
      <path
       fill="url(#grad1)"
       d="M160-80q-33 0-56.5-23.5T80-160v-480q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v480q0 33-23.5 56.5T800-80H160Zm240-640h160v-80H400v80Zm40 360v120h80v-120h120v-80H520v-120h-80v120H320v80h120Z"
      />
     </svg>
     <h1 className="text-5 font-semibold">MedKitPOS</h1>
    </div>
    {/* Mobile Menu Icon */}
    <button
     onClick={toggleSidebar}
     className="block md:hidden lg:hidden"
     aria-label="Toggle Sidebar"
    >
     <Bars3Icon className="w-9" />
    </button>
    <div className="hidden lg:flex flex-col ">
     <h1 className="text-lg font-bold whitespace-nowrap">Nana Adjei Barima</h1>
     <ClientDate /> {/* Use the ClientDate component */}
    </div>

    <div className="flex justify-center items-center">
     <div className="md:left-[26%] xl:left-[10%] xl1:left-[8%] md2:relative lg:left-[12%] absolute">
      <MagnifyingGlassIcon className="w-7 text-custom-gray cursor-pointer" />
     </div>
     <input
      type="text"
      className="border xl:w-[24rem] hidden lg:hidden lg1:block lg:w-[20rem] xl1:w-[30rem] xl1:px-20 xl2:w-[35rem] xl3:w-[40rem] xl4:w-[46rem] bg-custom-backgray rounded-full round px-12 py-6 h-6 text-sm border-custom-backgray focus:outline-none focus:border-custom-green"
      placeholder="Search collection..."
     />
    </div>

    <div className="flex justify-center items-center font-normal cursor-pointer border-[0.5px] gap-1 p-2 border-slate-200 rounded-lg">
     <Image src="/voucher.png" alt="voucher" width={23} height={23} />
     <p className="whitespace-nowrap text-sm font-semibold hidden lg1:hidden lg2:block lg:block">
      Use Voucher
     </p>
    </div>
    <div className="flex justify-center items-center cursor-pointer font-normal border-[0.5px] gap-1 p-2 border-slate-200 rounded-lg">
     <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="currentColor"
     >
      <path d="M40-120v-200h80v120h120v80H40Zm680 0v-80h120v-120h80v200H720ZM160-240v-480h80v480h-80Zm120 0v-480h40v480h-40Zm120 0v-480h80v480h-80Zm120 0v-480h120v480H520Zm160 0v-480h40v480h-40Zm80 0v-480h40v480h-40ZM40-640v-200h200v80H120v120H40Zm800 0v-120H720v-80h200v200h-80Z" />
     </svg>
     <p className="whitespace-nowrap text-sm font-semibold hidden lg1:hidden lg2:block lg:block">
      Scan <span className="">Prescription</span>
     </p>
    </div>
    <div className="flex gap-0 border-[0.5px] cursor-pointer p-2 border-slate-200 rounded-lg">
     <BellIcon className="w-6" />
     <span className="w-2 h-2  rounded-full  bg-red-600"></span>
    </div>

    <Image
     className="rounded-full"
     src="/passport.jpg"
     alt="passport pic"
     width={30}
     height={25}
    />

    <div className="cursor-pointer md:pr-2 lg:pr-0">
     <h3 className="font-semibold whitespace-nowrap">Sugar</h3>
     <p className="text-xs text-custom-gray">Pharmacist</p>
    </div>
   </nav>
  </>
 );
};

export default Header;
