import Image from "next/image";
import para from "../assets/para.jpeg";
import vento from "../assets/vento.jpg";
import injection from "../assets/injection.jpg";
import honey from "../assets/honey.webp";
import {
 PlusCircleIcon,
 PlusIcon,
 UserPlusIcon,
} from "@heroicons/react/24/solid";

const Medicines = () => {
 return (
  <>
   <article className="pt-5 px-8">
    <h2 className="font-bold text-lg">Medicines</h2>
    <ul>
     <li className="pt-6">
      <Image
       src="/para.jpg"
       alt="para"
       className="rounded-lg"
       width={170}
       height={150}
      />
      <p className="pt-3 text-sm font-semibold">Paracetamol Berno</p>
      <div className="w-32 w-36 text-[0.65rem] text-custom-gray">
       Paracetamol works by inhibiting the production of certain chameical..
      </div>
      <span className="text-[0.6rem] font-bold">Stock:12</span>
      <div className="flex justify-between items-center w-40 w-44">
       <div className="flex">
        <span className="text-custom-green pr-1 align-super text-xs font-semibold">
         $
        </span>
        <p className="font-bold font-open-sans">3.75</p>
       </div>
       <div className="bg-slate-100 w-20 p-1 flex justify-between items-center rounded-2xl">
        <div className="bg-white w-6 h-6 flex justify-center items-center rounded-full">
         <span className="text-custom-green font-semibold  text-lg">-</span>
        </div>
        <span className="text-[0.5rem] font-semibold">1</span>
        <div className="bg-custom-green w-6 h-6 flex justify-center items-center text-white rounded-full">
         <span className="pb-[1.1px] font-semibold text-lg">+</span>
        </div>
       </div>
      </div>
     </li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
    </ul>
   </article>
  </>
 );
};

export default Medicines;
