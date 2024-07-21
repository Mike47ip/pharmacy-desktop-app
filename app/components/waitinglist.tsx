"use client";
import React from "react";
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
 const waitingListItems = medicines
  .map((medicine, index) => ({ medicine, index }))
  .filter(({ index }) => quantities[index] > 0);

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
    Detail Prescription <span className="text-custom-green">{cartItems}</span>
   </p>

   <div className="max-w-md mx-auto mt-2 bg-custom-background p-4 rounded-lg">
    <div className="h-28 overflow-y-auto rounded-lg bg-gray-100 custom-scrollbar">
     {waitingListItems.length === 0 ? (
      <p className="text-center py-4 text-custom-gray">
       Please, you have not added anything yet.
      </p>
     ) : (
      <table className="w-full table-fixed">
       <thead>
        <tr className="text-custom-gray text-sm">
         <th className="px-4 py-2 w-1/2 text-left">Name</th>
         <th className="px-4 py-2 w-1/2 text-right">Amount</th>
        </tr>
       </thead>
       <tbody>
        {waitingListItems.map(({ medicine, index }) => (
         <tr key={index}>
          <td className="px-4 py-2 whitespace-nowrap text-sm font-semibold">
           {medicine.title}
          </td>
          <td className="px-4 py-2 font-semibold text-right text-custom-gray">
           x{quantities[index]}
          </td>
         </tr>
        ))}
       </tbody>
      </table>
     )}
    </div>
   </div>

   <div className="max-w-md mx-auto mt-8 bg-custom-background p-4 rounded-lg">
    <div className="h-64 overflow-y-auto rounded-lg bg-gray-100 custom-scrollbar">
     {waitingListItems.length === 0 ? (
      <p className="text-center py-4 text-custom-gray">
       Please, you have not added anything yet.
      </p>
     ) : (
      <ul className="flex !flex-col-reverse gap-8">
       {waitingListItems.map(({ medicine, index }) => (
        <li key={index} className="flex-grow">
         <div className="flex justify-between items-center gap-2 h-[6rem]">
          <div id="image" className="flex-shrink-0 z-10">
           <Image
            src={medicine.src}
            alt={medicine.alt}
            className="object-cover hidden lg:block p-1 w-[4.8rem] h-[6rem]"
            width={300}
            height={250}
           />
          </div>

          <div className="flex flex-col justify-between w-full">
           <div className="flex justify-between pb-2">
            <div
             className="flex flex-col justify-between gap-2 flex-shrink"
             id="title"
            >
             <p className="font-bold z-40 whitespace-nowrap sticky">
              {medicine.title}
             </p>
             <p className="text-custom-gray text-sm">dosage 3 times a day</p>
            </div>

            <div
             id="control-panel"
             className="flex flex-shrink flex-col justify-between items-end"
            >
             <PencilSquareIcon className="w-6" />
            </div>
           </div>
           <div className="p-1 flex justify-between relative items-center rounded-3xl">
            <p className="font-semibold">
             <span className="text-custom-green">$ </span>5.6{" "}
             <span className="text-custom-gray"> /Strip</span>
            </p>
            <div className="flex justify-between rounded-3xl p-1 bg-white w-24">
             <button
              onClick={() => handleDecrease(index)}
              className="bg-custom-backgray w-7 h-7 flex justify-center items-center rounded-full"
              aria-label="Decrease quantity"
              disabled={medicine.stock === 0}
             >
              <span
               className={`font-semibold text-3xl pb-[3px] ${
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
              className={`w-7 h-7 flex justify-center items-center text-white rounded-full ${
               medicine.stock === 0
                ? "bg-custom-gray cursor-not-allowed"
                : "bg-custom-green"
              }`}
              aria-label="Increase quantity"
              disabled={medicine.stock === 0}
             >
              <span className={`pb-[2px] font-semibold text-2xl text-white`}>
               +
              </span>
             </button>
            </div>
           </div>
          </div>
         </div>
        </li>
       ))}
      </ul>
     )}
    </div>
   </div>

   {isCartVisible && (
    <>
     <table className="w-full table-fixed">
      <h4 className="font-semibold px-4">Summary</h4>
      <tbody>
       <tr>
        <td className="px-4 py-2 whitespace-nowrap text-sm text-custom-gray font-semibold">
         Sum Total
        </td>
        <td className="px-4 py-2 font-semibold text-sm text-right ">
         {cartTotal.toFixed(2)}
        </td>
       </tr>
       <tr className="border-b-[0.5px] mb-3 border-custom-gray">
        <td className="px-4 py-2 whitespace-nowrap text-sm text-custom-gray font-semibold">
         Platform fees
        </td>
        <td className="px-4 py-2 font-semibold text-sm text-right ">$0.00</td>
       </tr>
       <tr className="!pt-10">
        <td className="px-4 py-2 whitespace-nowrap text-md font-semibold">
         Total
        </td>
        <td className="px-4 py-2 font-semibold text-md text-right ">
         {cartTotal.toFixed(2)}
        </td>
       </tr>
      </tbody>
     </table>
     <button className="flex justify-center rounded-xl w-full mt-4 h-11 bg-custom-green text-white items-center">
      <p className="text-sm whitespace-nowrap absolute">Print bill</p>
     </button>
    </>
   )}

   {isCartVisible && (
    <section
     id="Cart"
     className="hidden justify-between bottom-0 items-center bg-white w-full h-24 px-4 py-9 shadow-upward z-30"
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
