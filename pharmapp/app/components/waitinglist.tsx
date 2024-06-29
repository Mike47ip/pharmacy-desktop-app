"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export interface Medicine {
 src: string;
 alt: string;
 title: string;
 description: string;
 stock: number;
 netto: string;
 price: number;
}

export interface WaitingListProps {
 medicines: Medicine[];
 quantities: number[];
 handleIncrease: (index: number) => void;
 handleDecrease: (index: number) => void;
 isCartVisible: boolean;
 cartItems: number;
 cartTotal: number;
}

export const WaitingList: React.FC<WaitingListProps> = ({
 medicines,
 quantities,
 handleIncrease,
 handleDecrease,
 isCartVisible,
 cartItems,
 cartTotal,
}) => {
 console.log("medicines prop in WaitingList:", medicines); // Log the medicines prop

 return (
  <main className="sticky top-0 h-auto p-4 bg-white border-l-[1px] border-slate-20">
   <div className="flex justify-between">
    <h1 className="text-lg font-semibold">Waitlist</h1>
    <p>
     A{" "}
     <span className="text-custom-gray text-lg opacity-70 font-semibold">
      1#1256
     </span>
    </p>
   </div>
   <p className="text-sm font-semibold pt-3">
    Detail Prescription <span className="text-custom-green">3</span>
   </p>

   <div className="max-w-md mx-auto mt-8 bg-custom-background p-4 rounded-lg">
    <div className="h-28 overflow-y-auto rounded-lg bg-gray-100 custom-scrollbar">
     <table className="w-full  table-fixed">
      <thead>
       <tr className="text-custom-gray">
        <th className="px-4 py-2 w-1/2 text-left">Name</th>
        <th className="px-4 py-2 w-1/2 text-right">Amount </th>
       </tr>
      </thead>
      <tbody>
       <tr className="">
        <td className="px-4 py-2 font-semibold whitespace-nowrap">
         H1 D50000 Vitamin
        </td>
        <td className="px-4 py-2 font-semibold text-right text-custom-gray">
         {" "}
         x1
        </td>{" "}
       </tr>
       <tr className="">
        <td className="px-4 py-2 font-semibold whitespace-nowrap">
         Santol Tablets
        </td>
        <td className="px-4 py-2 font-semibold text-right text-custom-gray">
         {" "}
         x1
        </td>
       </tr>
       <tr className="">
        <td className="px-4 py-2 font-semibold whitespace-nowrap">
         Paracetamol Berno
        </td>
        <td className="px-4 py-2 font-semibold text-right text-custom-gray">
         {" "}
         x1
        </td>
       </tr>
       <tr className="">
        <td className="px-4 py-2 font-semibold whitespace-nowrap">
         Injection Fluid
        </td>
        <td className="px-4 py-2 font-semibold text-right text-custom-gray">
         {" "}
         x1
        </td>
       </tr>
       <tr className="">
        <td className="px-4 py-2 font-semibold whitespace-nowrap">
         Colace Glycerine
        </td>
        <td className="px-4 py-2 font-semibold text-right text-custom-gray">
         {" "}
         x1
        </td>
       </tr>
      </tbody>
     </table>
    </div>
   </div>

   <div className="max-w-md mx-auto mt-8 bg-custom-background p-4 rounded-lg">
    <div className="h-44 overflow-y-auto rounded-lg bg-gray-100 custom-scrollbar">
     <ul className=" flex flex-col gap-8">
      {medicines.map((medicine, index) => (
       <li key={index} className="flex-grow overflow-hidden">
        {" "}
        {/*Hide to remove horizontal scroll */}
        <div className="flex justify-between gap-2 h-[6rem]">
         <div id="image" className="flex-shrink-0 z-10">
          <Image
           src={medicine.src}
           alt={medicine.alt}
           className="object-cover p-1 w-[4.5rem]"
           width={300}
           height={250}
          />
         </div>

         <div className="flex-shrink" id="title">
          <p className="font-bold z-40">{medicine.title}</p>
         </div>

         <div
          id="control-panel"
          className="flex flex-shrink flex-col justify-between items-end"
         >
          <PencilSquareIcon className="w-6" />
          <div className="bg-white w-34 w-24 p-1 flex justify-between relative items-center rounded-3xl">
           <button
            onClick={() => handleDecrease(index)}
            className="bg-white w-6 h-6 flex justify-center items-center rounded-full"
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
           <span className="text-[1rem] font-semibold">
            {quantities[index]}
           </span>
           <button
            onClick={() => handleIncrease(index)}
            className={`w-6 h-6 flex justify-center items-center text-white rounded-full ${
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
        </div>
       </li>
      ))}
     </ul>
    </div>
   </div>
   {isCartVisible && (
    <section
     id="Cart"
     className="flex justify-between  bottom-0 items-center bg-white w-full h-24 px-4 py-9 shadow-upward z-30"
    >
     <div className="flex flex-col justify-center items-center">
      <h2 className="text-xs pl-4 text-custom-gray">You&apos;ve added</h2>
      <p className="flex font-semibold gap-1">
       <span className="text-custom-green font-semibold">{cartItems}</span>{" "}
       items
      </p>
     </div>
     <button className="flex justify-center rounded-xl w-32 h-10 bg-custom-green text-white items-center">
      <p className="text-sm whitespace-nowrap absolute">
       Purchase {cartTotal.toFixed(2)}
      </p>
     </button>
    </section>
   )}
  </main>
 );
};
