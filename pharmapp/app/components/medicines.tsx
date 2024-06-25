"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

interface Medicine {
 src: string;
 alt: string;
 title: string;
 description: string;
 stock: number;
 price: number;
}

const Medicines: React.FC = () => {
 const medicinesData: Medicine[] = [
  {
   src: "/para.jpg",
   alt: "para",
   title: "Paracetamol Berno",
   description:
    "Paracetamol works by inhibiting the production of certain chemicals..",
   stock: 12,
   price: 3.75,
  },
  {
   src: "/vento.jpg",
   alt: "vento",
   title: "Vento Syrup",
   description:
    "Vento Syrup is used for treating cough and cold of different kinds..",
   stock: 0, // Deliberately empty stock for tesing
   price: 4.5,
  },
  {
   src: "/injection.jpg",
   alt: "injection",
   title: "Injection Fluid",
   description:
    "Used for intravenous administration to treat various conditions..",
   stock: 8,
   price: 5.2,
  },
  {
   src: "/capsule.jpg",
   alt: "capsule",
   title: "Capsule Medicine",
   description:
    "Effective in treating chronic illnesses with minimal side effects..",
   stock: 10,
   price: 2.99,
  },
  {
   src: "/ColaceGlycerin",
   alt: "capsule",
   title: "Colace Glycerine",
   description:
    "Effective in treating suppository illnesses with minimal side effects..",
   stock: 18,
   price: 8.99,
  },
  {
   src: "/injection5",
   alt: "capsule",
   title: "Injection Medicine",
   description:
    "Most effective way of adminsitering drugs into your body without any..",
   stock: 6,
   price: 10.42,
  },
 ];

 const [quantities, setQuantities] = useState<number[]>(
  Array(medicinesData.length).fill(0)
 );
 const [cartItems, setCartItems] = useState<number>(0);
 const [cartTotal, setCartTotal] = useState<number>(0);
 const [isCartVisible, setIsCartVisible] = useState<boolean>(false);

 const handleIncrease = (index: number) => {
  console.log(`Attempting to increase quantity for index: ${[index]}`);

  setQuantities((prevQuantities) => {
   const newQuantities = [...prevQuantities];
   if (newQuantities[index] < medicinesData[index].stock) {
    newQuantities[index] += 1;
    console.log(`New quantity for index ${index}: ${newQuantities[index]}`);
    return newQuantities;
   }
   console.log(`Cannot increase: stock limit reached for index ${index}`);
   return prevQuantities;
  });

  // Check if all quantities are zero after decrementing
  if (
   quantities.reduce((acc, currentQuantity) => acc + currentQuantity, 0) === 0
  ) {
   setIsCartVisible(false);
  }

  //Only add drugs as long as they are not out of quantity
  if (quantities[index] < medicinesData[index].stock) {
   setCartItems((prevItems) => {
    const newItems = prevItems + 1;
    console.log(`Updated cart items: ${newItems}`);
    return newItems;
   });

   setCartTotal((prevTotal) => {
    const newTotal = prevTotal + medicinesData[index].price;
    console.log(`Updated cart total: $${newTotal.toFixed(2)}`);
    return newTotal;
   });
  }
  setIsCartVisible(true);
 };

 const handleDecrease = (index: number) => {
  console.log(`Attempting to decrease quantity for index: ${index}`);

  setQuantities((prevQuantities) => {
   const newQuantities = [...prevQuantities];
   if (newQuantities[index] > 0) {
    newQuantities[index] -= 1;
    console.log(`New quantity for index ${index}: ${newQuantities[index]}`);
    return newQuantities;
   }
   console.log(`Cannot decrease: quantity already 0 for index ${index}`);
   return prevQuantities;
  });

  if (quantities[index] > 0) {
   setCartItems((prevItems) => {
    const newItems = prevItems - 1;
    console.log(`Updated cart items: ${newItems}`);
    return newItems;
   });

   setCartTotal((prevTotal) => {
    const newTotal = prevTotal - medicinesData[index].price;
    console.log(`Updated cart total: $${newTotal.toFixed(2)}`);
    return newTotal;
   });
  }
 };

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
     <ul className="grid grid-cols-2 w-full gap-11 pt-2">
      {medicinesData.map((medicine, index) => (
       <li className="flex mx-1 pt-3" key={index}>
        <div className="relative w-full pb-[50.25%]">
         <Image
          src={medicine.src}
          alt={medicine.alt}
          className="rounded-lg object-cover p-5"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 20vw, 30vw"
         />
        </div>
        <div>
         <p className="pt-3 text-sm font-semibold">{medicine.title}</p>
         <div className="w-36 text-[0.7rem] leading-snug text-custom-gray">
          {medicine.description}
         </div>
         <span className="text-[0.6rem] font-bold">
          Stock: {medicine.stock}
         </span>
         <div className="flex justify-between items-center w-11/12 mt-2">
          <div className="flex">
           <span
            className={`pr-1 align-super text-xs font-semibold ${
             medicine.stock === 0 ? "text-custom-gray" : "text-custom-green"
            }`}
           >
            $
           </span>
           <p className="font-bold font-open-sans">
            {medicine.price.toFixed(2)}
           </p>
          </div>
          <div className="bg-slate-100 w-20 p-1 flex justify-between items-center rounded-2xl">
           <button
            onClick={() => handleDecrease(index)}
            className="bg-white w-6 h-6 flex justify-center items-center rounded-full"
            aria-label="Decrease quantity"
            disabled={medicine.stock === 0}
           >
            <span
             className={`font-semibold text-lg ${
              medicine.stock === 0
               ? "text-custom-gray cursor-not-allowed"
               : "text-custom-green"
             }`}
            >
             -
            </span>
           </button>
           <span className="text-[0.5rem] absolute ml-[2.1rem] font-semibold">
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
            <span className={`pb-[1.1px] font-semibold text-lg text-white`}>
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
   </section>
   {isCartVisible && ( // Conditionally render the Cart section based on isCartVisible
    <section
     id="Cart"
     className="flex justify-between fixed bottom-0 items-center bg-white w-full h-24 px-4 py-9 shadow-upward z-30"
    >
     <div className="flex flex-col justify-center items-center">
      <h2 className="text-xs pl-4 text-custom-gray">You&apos;ve added</h2>
      <p className="flex font-semibold gap-1">
       <span className="text-custom-green font-semibold">{cartItems}</span>items{" "}
       <ChevronDownIcon className="w-4 absolute ml-16" />
      </p>
     </div>
     <button className="flex justify-center rounded-xl w-32 h-10 bg-custom-green text-white items-center">
      <p className="text-sm whitespace-nowrap absolute">
       Purchase {cartTotal.toFixed(2)}
      </p>
     </button>
    </section>
   )}
  </>
 );
};

export default Medicines;
