import {
 ArrowLeftStartOnRectangleIcon,
 ChartPieIcon,
 UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import { UsersIcon } from "@heroicons/react/24/outline";
import { ClockIcon } from "@heroicons/react/24/outline";

const Sidebar = () => {
 return (
  <>
   <div className="w-2/12 bg-custom-dark h-full overflow-y-auto flex flex-col custom-scrollbar">
    <div className="flex pt-7 flex-row-reverse gap-3 pb-7 justify-center items-center border-b-[0.2px] border-slate-600">
     <h1 className="text-white">MedkitPOS</h1>
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
    </div>

    <div className="flex flex-col h-full justify-between">
     <div className="">
      <div className="pt-16 ">
       <h2 className="text-custom-gray pb-4 font-semibold ml-5">Main Menu</h2>

       <ul className="text-white ">
       <li className="flex  items-center gap-5 py-3 hover:bg-gradient-to-r hover:from-custom-green/30 hover:via-custom-green/15 hover:via-30% hover:to-custom-green/5 hover:to-70% hover:text-custom-green cursor-pointer transition-all  ">
         {" "}
         <svg
          xmlns="http://www.w3.org/2000/svg"
          height="28px"
          viewBox="0 -960 960 960"
          width="28px"
          className="ml-5"
          fill="currentColor"
         >
          <path d="M666-440 440-666l226-226 226 226-226 226Zm-546-80v-320h320v320H120Zm400 400v-320h320v320H520Zm-400 0v-320h320v320H120Z" />
         </svg>
         <h2 className="!text-white hover:text-white">Home</h2>
        </li>
        <li className="flex items-center gap-5 py-3 hover:bg-gradient-to-r hover:from-custom-green/30 hover:via-custom-green/15 hover:via-30% hover:to-custom-green/5 hover:to-70% hover:text-custom-green cursor-pointer transition-all ">
         <ClockIcon className="w-7 ml-5" /> History
        </li>
        <li className="flex items-center gap-5 py-3 hover:bg-gradient-to-r hover:from-custom-green/30 hover:via-custom-green/15 hover:via-30% hover:to-custom-green/5 hover:to-70% hover:text-custom-green cursor-pointer transition-all ">
         <ChartPieIcon className="w-7 ml-5" /> Supplies
        </li>
        <li className="flex items-center gap-5 py-3 hover:bg-gradient-to-r hover:from-custom-green/30 hover:via-custom-green/15 hover:via-30% hover:to-custom-green/5 hover:to-70% hover:text-custom-green cursor-pointer transition-all ">
         {" "}
         <UsersIcon className="w-7 ml-5" /> Waitlist
        </li>
        <li className="flex items-center gap-5 py-3 hover:bg-gradient-to-r hover:from-custom-green/30 hover:via-custom-green/15 hover:via-30% hover:to-custom-green/5 hover:to-70% hover:text-custom-green cursor-pointer transition-all ">
         <ClockIcon className="w-7 ml-5" /> History
        </li>
        <li className="flex items-center gap-5 py-3 hover:bg-gradient-to-r hover:from-custom-green/30 hover:via-custom-green/15 hover:via-30% hover:to-custom-green/5 hover:to-70% hover:text-custom-green cursor-pointer transition-all ">
         <ChartPieIcon className="w-7 ml-5" /> Supplies
        </li>
        <li className="flex items-center gap-5 py-3 hover:bg-gradient-to-r hover:from-custom-green/30 hover:via-custom-green/15 hover:via-30% hover:to-custom-green/5 hover:to-70% hover:text-custom-green cursor-pointer transition-all ">
         {" "}
         <UsersIcon className="w-7 ml-5" /> Waitlist
        </li>
       </ul>
      </div>

      <div>
       <h3 className="text-custom-gray pb-4 pt-7 font-semibol ml-5">General</h3>
       <ul className="text-white">
        <li className="flex items-center gap-5 py-3 hover:bg-gradient-to-r hover:from-custom-green/30 hover:via-custom-green/15 hover:via-30% hover:to-custom-green/5 hover:to-70% hover:text-custom-green cursor-pointer transition-all">
         <Cog6ToothIcon className="w-7 ml-5" />
         Settings
        </li>
        <li className="flex items-center gap-5 py-3 hover:bg-gradient-to-r hover:from-custom-green/30 hover:via-custom-green/15 hover:via-30% hover:to-custom-green/5 hover:to-70% hover:text-custom-green cursor-pointer transition-all">
         <UserGroupIcon className="w-7 ml-5" /> Community
        </li>
       </ul>
      </div>
     </div>

     <div className="flex text-white pt-16 ">
      <button className="flex items-center gap-5 py-3 w-full  hover:bg-gradient-to-r hover:from-custom-green/30 hover:via-custom-green/15 hover:via-30% hover:to-custom-green/5 hover:to-70% hover:text-custom-green cursor-pointer transition-all">
       <ArrowLeftStartOnRectangleIcon className="w-7 ml-5" />
       Logout
      </button>
     </div>
    </div>
   </div>
  </>
 );
};

export default Sidebar;
