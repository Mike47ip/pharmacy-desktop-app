import Image from "next/image";
import {
 CheckCircleIcon,
 MagnifyingGlassIcon,
 ViewfinderCircleIcon,
} from "@heroicons/react/24/solid";
import Medicines from "./medicines";
import {
 ArrowRightCircleIcon,
 ClockIcon,
 UserIcon,
} from "@heroicons/react/24/outline";
import { WaitingList } from "./waitinglist";
import {Medicine} from "../types";


const medicinesData: Medicine[] = [
 {
  grade: "A1",
  code: "#2312",
  name: "Ama Sarpong ",
  items: 5,
 },
 {
  grade: "A2",
  code: "#4567",
  name: "Ben K Osei",
  items: 8,
 },
 {
  grade: "A3",
  code: "#5793",
  name: "Injection Fluid",
  items: 10,
 },
 {
  grade: "A4",
  code: "#4445",
  name: "Capsule Medicine",
  items: 12,
 },
 {
  grade: "A5",
  code: "#6318",
  name: "Colace Glycerine",
  items: 7,
 },
 {
  grade: "A6",
  code: "#9423",
  name: "Injection Medicine",
  items: 11,
 },
];
interface BodyProps {
 // Define props here if needed
}

const Body: React.FC<BodyProps> = () => {
 return (
  <>
   <main className="flex w-full">
    <div className="w-[70%]">
     <article className="p-10">
      <div className="relative flex justify-between items-center p-7 bg-dark-black-background bg-cover bg-center rounded-3xl">
       <div className="flex flex-col gap-2">
        <div className="flex gap-4 text-white font-semibold">
         <h1>Your subscription is almost expired</h1>
         <div className="flex  justify-center gap-1 font-medium text-xs align-super">
          {" "}
          <ClockIcon className="text-white w-3 h-3" /> 7 days left
         </div>
        </div>
        <div>
         <p className="text-custom-gray text-sm">
          Update your plan to superior to enjoy <br /> many additional benefits
         </p>
        </div>
       </div>
       <button className="bg-custom-green py-3 px-5 text-white font-bold rounded-2xl">
        Upgrade Plan
       </button>
      </div>
     </article>

     <article className="pl-5">
      <div className="flex justify-between">
       <h3 className="text-lg font-bold">Waiting List</h3>
       <button className="pr-3 text-custom-green font-bold underline">
        See more
       </button>
      </div>
      <div className="max-w-[50rem]">
       <ul id="waiting-list" className="flex gap-5 overflow-x-hidden">
        {medicinesData.map((medicine, index) => (
         <li key={index} className="flex bg-white rounded-2xl gap-4 p-2">
          <div className="p-7 bg-custom-background rounded-lg">
           <h4 className="font-bold text-3xl">{medicine.grade}</h4>
          </div>
          <div className="w-44">
           <p className="text-sm bg-custom-dark text-white text-right rounded-lg px-1 flex justify-between items-center">
            {" "}
            <CheckCircleIcon
             className={`w-3 h-3 ${
              index === 1 ? "text-gray-500" : "text-custom-green"
             }`}
            />{" "}
            {medicine.code}
           </p>
           <p className="text-lg mt-2 whitespace-nowrap font-semibold flex gap-4 items-center">
            <UserIcon className="w-6 text-custom-gray" /> {medicine.name}
           </p>
           <p className="flex gap-4 text-sm text-custom-gray">
            <ArrowRightCircleIcon className="w-6" /> {medicine.items} items
           </p>
          </div>
         </li>
        ))}
       </ul>
      </div>
     </article>

     <article className="justify-center hidden items-center">
      <ul className="flex flex-col w-10/12 justify-center font-open-sans items-center border-[1px] border-custom-400 rounded-2xl">
       <li className="flex w-full p-3 justify-between font-medium border-b-[1px] border-custom-400 rounded-2xl">
        {" "}
        <div className="flex gap-[4px] flex-col">
         <span className="text-[0.8rem] font-semibold text-custom-gray">
          Your Waitlist Number
         </span>
         <p className="text-[1.2rem] font-semibold">
          A1<span className="text-slate-300">#1219</span>
         </p>
        </div>{" "}
        <div className="flex justify-center items-center h-9 px-2 rounded-xl gap-2 bg-custom-lightgreen ">
         <span className="">
          <ViewfinderCircleIcon className="text-custom-green w-5 " />
         </span>
         <p className="text-custom-green text-md font-semibold ">Scan Again</p>
        </div>
       </li>
       <li className="flex w-full p-3 justify-between font-medium">
        {" "}
        <div className="flex gap-[4px] flex-col">
         <span className="text-[0.8rem] font-semibold text-custom-gray">
          Your Name
         </span>
         <p className="text-[1.2rem] font-semibold">Nana Adjei</p>
        </div>{" "}
        <div className="flex justify-center items-center">
         <p className="text-md font-semibold ">
          <span className="text-custom-green">3 </span>items
         </p>
        </div>
       </li>
      </ul>
     </article>

     <article className="hidden">
      <div className="flex justify-center items-center px-4">
       <div className="absolute left-11 mt-10">
        <MagnifyingGlassIcon className="w-7 text-custom-gray" />
       </div>
       <input
        type="text"
        className="border w-11/12 bg-custom-backgray rounded-full round px-12 py-7 h-6 mt-9 text-sm border-custom-backgray focus:outline-none focus:border-custom-green"
        placeholder="Search collection..."
       />
      </div>
     </article>

     <article className="pt-4 px-8 overflow-x-auto">
      <ul className="flex gap-4 font-open-sans ">
       <li className="koo text-sm font-bold px-5 py-3 rounded-3xl text-white bg-gradient-to-b from-green-gradient to-green-gradient-light">
        All
       </li>
       <li className="koo text-sm font-bold px-5 py-3 border-[0.6px] border-slate-400 rounded-3xl text-custom-gray">
        Tablet
       </li>
       <li className="koo text-sm font-bold px-5 py-3 border-[0.6px] border-slate-400 rounded-3xl text-custom-gray">
        Capsule
       </li>
       <li className="koo text-sm font-bold px-5 py-3 border-[0.6px] border-slate-400 rounded-3xl text-custom-gray">
        Suppository
       </li>
       <li className="koo text-sm font-bold px-5 py-3 border-[0.6px] border-slate-400 rounded-3xl text-custom-gray">
        Powder
       </li>
       <li className="koo text-sm font-bold px-5 py-3 border-[0.6px] border-slate-400 rounded-3xl text-custom-gray">
        Syrup
       </li>
       <li className="koo text-sm font-bold px-5 py-3 border-[0.6px] border-slate-400 rounded-3xl text-custom-gray">
        Potion
       </li>
      </ul>
     </article>
     <Medicines />
    </div>
    <aside className="w-[30%]">
    <WaitingList medicines={medicinesData} /> {/* Corrected line */}
    </aside>
   </main>
  </>
 );
};

export default Body;
