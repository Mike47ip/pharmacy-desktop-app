import {
 ArrowsRightLeftIcon,
 Battery0Icon,
 BellIcon,
 ShieldExclamationIcon,
 WifiIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
// import healing from "../assets/healing.png";

export default function Header() {
 return (
  <>
   <div className="flex justify-between px-4 py-1  w-full">
    <span className="text-[7px] font-medium">9:13</span>

<div className="flex gap-1">

    <WifiIcon className="w-2" />
    <Battery0Icon className="w-2" />
    <ArrowsRightLeftIcon className="w-2" />
</div>
   </div>

   <nav className="flex justify-between px-4 pb-4">
    <div className="flex items-center gap-2">
     <svg
      className="w-4 h-4"
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
     <h1 className="text-[10px] font-medium">MedKitPOS</h1>
    </div>

    <div className="flex items-center gap-2">
     {/* <Image
      src="/healing_dp1lsh.png"
      alt="heal"
      width={25}
      height={20}
     /> */}

     <div className="flex justify-center font-normal border-[0.5px] p-1 border-slate-200 rounded-md">
      <ShieldExclamationIcon className="w-[0.7rem]"/>
     </div>
     <div className="flex justify-center font-normal border-[0.5px] p-1 border-slate-200 rounded-md">
      <BellIcon className="w-[0.7rem]"/>
     <span className="w-1 h-1 right-4 top-5 rounded-full absolute bg-red-600"></span>
     </div>


    </div>
   </nav>
  </>
 );
}
