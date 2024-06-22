import {
 ArrowsRightLeftIcon,
 BellIcon,
 ShieldExclamationIcon,
 WifiIcon,
} from "@heroicons/react/24/outline";
import {
 Battery0Icon,
 Battery50Icon,
 MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Header() {
 return (
  <>
   <nav className="flex gap-28 px-4 pt-7 pb-4">
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

    <div className="flex justify-center items-center">
     <div className="flex flex-col">
      <h1 className="text-lg font-bold">Nana Adjei</h1>
      <span className="text-sm">Date</span>
     </div>

     <div className="flex justify-center items-center px-4">
      <div className="left-[10%] absolute">
       <MagnifyingGlassIcon className="w-7 text-custom-gray" />
      </div>
      <input
       type="text"
       className="border  bg-custom-backgray rounded-full round px-12 py-7 h-6 text-sm border-custom-backgray focus:outline-none focus:border-custom-green"
       placeholder="Search collection..."
      />
     </div>
    </div>

    <div className="flex items-center gap-2">
     {/* <Image
      src="/healing_dp1lsh.png"
      alt="heal"
      width={25}
      height={20}
     /> */}

     <div className="flex justify-center font-normal border-[0.5px] p-2 border-slate-200 rounded-lg">
      <ShieldExclamationIcon className="w-6" />
      <p>
        Use Voucher
      </p>
     </div>
     <div className="flex justify-center font-normal border-[0.5px] p-2 border-slate-200 rounded-lg">
      <BellIcon className="w-6" />
      <p>
        Scan Prescription
      </p>
      <span className="w-1 h-1 right-[18px] top-[64px] rounded-full absolute bg-red-600"></span>
     </div>
     <BellIcon className="w-6" />

     <Image className="rounded-full" src="/passport.jpg" alt="passport pic" width={30} height={25}/>
     
    </div>
    <div>
      <h3 className="font-bold">Sugar Yaw</h3>
      <p className="text-sm">Pharmacist</p>
    </div>
   </nav>
  </>
 );
}
