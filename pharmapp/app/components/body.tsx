import Image from "next/image";
import {
 MagnifyingGlassIcon,
 ViewfinderCircleIcon,
} from "@heroicons/react/24/solid";
import Medicines from "./medicines";
import { WaitingList } from "./waitinglist";
interface BodyProps {
 // Define props here if needed
}

const Body: React.FC<BodyProps> = () => {
 return (
  <>
   <main className="flex w-full">
    <div className="w-[70%]">
     <article className="p-10">
      <div className="relative flex justify-between items-start p-10 bg-dark-black-background bg-cover bg-center rounded-3xl">
       <div>
        <div className="flex text-white">
         <h1>Your subscription is almost expired</h1>
         <span className="text-xs align-super">7 days left</span>
        </div>
        <div>
         <p className="text-custom-gray">
          Update your plan to superior to enjoy <br /> many additional benefits
         </p>
        </div>
       </div>
       <button className="bg-custom-green p-5">Upgrade Plan</button>
      </div>
     </article>

     <article className="flex justify-center items-center">
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

     <article>
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
       <li className="koo text-xs font-medium px-5 py-3 rounded-3xl text-white bg-gradient-to-b from-green-gradient to-green-gradient-light">
        All
       </li>
       <li className="koo text-xs font-medium px-5 py-3 border-[0.6px] border-slate-400 rounded-3xl text-custom-gray">
        Tablet
       </li>
       <li className="koo text-xs font-medium px-5 py-3 border-[0.6px] border-slate-400 rounded-3xl text-custom-gray">
        Capsule
       </li>
       <li className="koo text-xs font-medium px-5 py-3 border-[0.6px] border-slate-400 rounded-3xl text-custom-gray">
        Suppository
       </li>
       <li className="koo text-xs font-medium px-5 py-3 border-[0.6px] border-slate-400 rounded-3xl text-custom-gray">
        Powder
       </li>
       <li className="koo text-xs font-medium px-5 py-3 border-[0.6px] border-slate-400 rounded-3xl text-custom-gray">
        Syrup
       </li>
       <li className="koo text-xs font-medium px-5 py-3 border-[0.6px] border-slate-400 rounded-3xl text-custom-gray">
        Potion
       </li>
      </ul>
     </article>
     <Medicines />
    </div>
    <aside className="w-[30%]">
     <WaitingList />
    </aside>
   </main>
  </>
 );
};

export default Body;
