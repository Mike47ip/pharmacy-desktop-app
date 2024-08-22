"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
 ChevronDownIcon,
 MinusCircleIcon,
 PlusCircleIcon,
} from "@heroicons/react/24/solid";
import { medicinesData } from "../../utils/medicineData";
import { Medicine } from "./waitinglist";
interface MedicinesProps {
 medicines: Medicine[];
 quantities: number[];
 handleIncrease: (index: number) => void;
 handleDecrease: (index: number) => void;
 isCartVisible: boolean;
 cartItems: number;
 cartTotal: number;
}

//truncate the description
const truncateText = (text: string, maxLength: number = 60): string => {
 if (text.length <= maxLength) {
  return text;
 }

 let truncated = text.slice(0, maxLength);
 const lastSpaceIndex = truncated.lastIndexOf(" ");

 if (lastSpaceIndex > 0) {
  truncated = truncated.slice(0, lastSpaceIndex);
 }

 return truncated + "...";
};

export const Medicines: React.FC<MedicinesProps> = ({
 quantities,
 handleIncrease,
 handleDecrease,
 isCartVisible,
 cartItems,
 cartTotal,
}) => {
 return (
  <>
   <section
    id="medicineCards"
    className={`pt-6 px-4 ${isCartVisible ? "mb-28 md:mb-14" : "mb-14"}`}
   >
    <div className="flex justify-between">
     <h2 className="font-bold text-lg pl-4">Medicines</h2>
     <button className="text-custom-green font-semibold underline">
      See all
     </button>
    </div>
    <div className="flex justify-center items-center">
     <ul className="grid grid-cols-2 w-full gap-5 pt-2">
      {medicinesData.map((medicine, index) => (
       <li className="flex flex-col w-full bg-white rounded-2xl" key={index}>
        <div className="flex flex-col lg:flex-row ">
        <div className="w-full h-[220px] md:h-[190px] lg:!h-[165px] p-5 !rounded-3xl overflow-hidden">
          <Image
            src={medicine.src}
            alt={medicine.alt}
            className="object-cover w-full h-full rounded-2xl"
            width={250}
            height={220}
          />
        </div>

         <div className="w-full px-5 lg:px-0">
          <p className="pt-3  text-base font-bold">{medicine.title}</p>
          <div
           id="des"
           className="w-full h-20 lg:text-[0.6rem] xl:text-[1rem] leading-snug text-custom-gray"
          >
           {truncateText(medicine.description)}
          </div>
          <div className="flex  gap-6 items-center whitespace-nowrap">
           <p className="text-[0.6rem] font-semibold flex text-custom-gray flex-col">
            Netto:{" "}
            <span className="text-black text-[0.9rem]">{medicine.netto}</span>
           </p>
           <p className="text-[0.6rem] font-semibold flex text-custom-gray flex-col">
            {" "}
            Stock:{" "}
            <span className="text-black text-[0.9rem]">
             {medicine.stock} Available{" "}
            </span>
           </p>
          </div>
         </div>
        </div>
        <div className="flex justify-between p-2 items-center w-full ">
         <div className="flex">
          <span
           className={`pr-1 align-super text-md font-semibold ${
            medicine.stock === 0 ? "text-custom-gray" : "text-custom-green"
           }`}
          >
           $
          </span>
          <p className="font-bold text-2xl font-open-sans">
           {medicine.price.toFixed(2)}{" "}
           <span className="text-custom-gray text-base font-medium">
            /bottle
           </span>
          </p>
         </div>
         <div className="bg-slate-100 w-40 p-1 flex justify-between relative items-center rounded-3xl">
          <button
           onClick={() => handleDecrease(index)}
           className="bg-white w-8 h-8 flex justify-center items-center rounded-full"
           aria-label="Decrease quantity"
           disabled={medicine.stock === 0}
          >
           <div
            className={`font-semibold pb-[4px] text-3xl ${
             medicine.stock === 0
              ? "text-custom-gray cursor-not-allowed"
              : "text-custom-green"
            }`}
           >
            <span className="text-center">-</span>
           </div>
          </button>
          <span className="text-[1rem] font-semibold">{quantities[index]}</span>
          <button
           onClick={() => handleIncrease(index)}
           className={`w-8 h-8 flex justify-center items-center text-white rounded-full ${
            medicine.stock === 0
             ? "bg-custom-gray cursor-not-allowed"
             : "bg-custom-green"
           }`}
           aria-label="Increase quantity"
           disabled={medicine.stock === 0}
          >
           <div className={`pt-[1px] font-semibold text-2xl text-white`}>
            <span className="text-center">+</span>
           </div>
          </button>
         </div>
        </div>
       </li>
      ))}
     </ul>
    </div>
   </section>
   {isCartVisible && ( // Conditionally render the Cart section based on isCartVisible
    <>
     <section className="flex justify-between md:hidden items-center  fixed bottom-0 bg-white w-full h-24 px-4 py-9 shadow-upward">
      <div className="flex flex-col justify-center items-center">
       <h2 className="text-xs pl-4 text-custom-gray">You&apos;ve added</h2>
       <p className="flex font-semibold gap-1">
        <span className="text-custom-green font-semibold">{cartItems}</span>
        items <ChevronDownIcon className="w-4 absolute ml-16" />
       </p>
      </div>
      <button className="flex justify-center rounded-xl min-w-min h-10 bg-custom-green text-white items-center px-4">
       <p className="text-sm whitespace-nowrap">
        Purchase {cartTotal.toFixed(2)}
       </p>
      </button>
     </section>
    </>
   )}
  </>
 );
};

export default Medicines;
