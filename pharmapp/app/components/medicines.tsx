"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { medicinesData } from "../utils/medicineData";

//  src: string;
//  alt: string;
//  title: string;
//  description: string;
//  stock: number;
//  netto: string;
//  price: number;
// }

// NEW: Update the component props
interface MedicinesProps {
 quantities: number[];
 handleIncrease: (index: number) => void;
 handleDecrease: (index: number) => void;
 isCartVisible: boolean;
 cartItems: number;
 cartTotal: number;
}

//  {
//   src: "/para.jpg",
//   alt: "para",
//   title: "Paracetamol Berno",
//   description:
//    "Paracetamol works by inhibiting the production of certain chemicals..",
//   netto: "60ml",
//   stock: 12,
//   price: 3.75,
//  },
//  {
//   src: "/syrup.jpg",
//   alt: "vento",
//   title: "Vento Syrup",
//   description:
//    "Vento Syrup is used for treating cough and cold of different kinds..",
//   netto: "33ml",
//   stock: 0, // Deliberately empty stock for tesing
//   price: 4.5,
//  },
//  {
//   src: "/injection.jpg",
//   alt: "injection",
//   title: "Injection Fluid",
//   description:
//    "Used for intravenous administration to treat various conditions..",
//   netto: "100ml",
//   stock: 8,
//   price: 5.2,
//  },
//  {
//   src: "/capsule.jpg",
//   alt: "capsule",
//   title: "Capsule Medicine",
//   description:
//    "Effective in treating chronic illnesses with minimal side effects..",
//   netto: "24ml",
//   stock: 10,
//   price: 2.99,
//  },
//  {
//   src: "/ColaceGlycerin",
//   alt: "capsule",
//   title: "Colace Glycerine",
//   description:
//    "Effective in treating suppository illnesses with minimal side effects..",
//   netto: "17ml",
//   stock: 18,
//   price: 8.99,
//  },
//  {
//   src: "/injection5",
//   alt: "capsule",
//   title: "Injection Medicine",
//   description:
//    "Most effective way of adminsitering drugs into your body without any..",
//   netto: "6ml",
//   stock: 6,
//   price: 10.42,
//  },
// ];
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
    className={`pt-6 px-4 ${isCartVisible ? "mb-24" : "pb-4"}`}
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
       <li className="flex flex-col bg-white rounded-xl" key={index}>
        <div className="flex">
         <Image
          src={medicine.src}
          alt={medicine.alt}
          className="object-cover p-5 rounded-3xl"
          width={220}
          height={250}
         />

         <div>
          <p className="pt-3 text-sm font-bold">{medicine.title}</p>
          <div className="w-36 h-20 text-[0.8rem] leading-snug text-custom-gray">
           {medicine.description}
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
           <span
            className={`font-semibold text-3xl ${
             medicine.stock === 0
              ? "text-custom-gray cursor-not-allowed"
              : "text-custom-green"
            }`}
           >
            -
           </span>
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
           <span className={`pb-[1.1px] font-semibold text-2xl text-white`}>
            +
           </span>
          </button>
         </div>
        </div>
       </li>
      ))}
     </ul>
    </div>
   </section>
   {isCartVisible && ( // Conditionally render the Cart section based on isCartVisible
    <section
     id="Cart"
     className="flex justify-between bottom-0 items-center bg-white w-full h-24 px-4 py-9 shadow-upward z-30"
    >
     <div className="flex flex-col justify-center items-center">
      <h2 className="text-xs pl-4 text-custom-gray">You&apos;ve added</h2>
      <p className="flex font-semibold gap-1">
       <span className="text-custom-green font-semibold">{cartItems}</span>items{" "}
       <ChevronDownIcon className="w-4 absolute ml-16" />
      </p>
     </div>
     <button className="flex justify-center rounded-xl min-w-min h-10 bg-custom-green text-white items-center px-4">
      <p className="text-sm whitespace-nowrap">
       Purchase {cartTotal.toFixed(2)}
      </p>
     </button>
    </section>
   )}
  </>
 );
};

export default Medicines;
