"use client";
import React, { useState } from "react";
import Image from "next/image";

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
 ];

 const [quantities, setQuantities] = useState<number[]>(
  Array(medicinesData.length).fill(0)
 );
 const [cartItems, setCartItems] = useState<number>(0);
 const [cartTotal, setCartTotal] = useState<number>(0);

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
   <section className="pt-6 px-4">
    <div className="flex justify-between">
     <h2 className="font-bold text-lg pl-4">Medicines</h2>
     <button className="text-custom-green font-semibold underline">
      See all
     </button>
    </div>
    <div className="flex justify-center items-center">
     <ul className="grid grid-cols-2 gap-4 pt-2">
      {medicinesData.map((medicine, index) => (
       <li className="mx-2 pt-3" key={index}>
        <div className="relative w-full pb-[65.25%]">
         <Image
          src={medicine.src}
          alt={medicine.alt}
          className="rounded-lg object-cover"
          layout="fill"
          objectFit="cover"
         />
        </div>
        <p className="pt-3 text-sm font-semibold">{medicine.title}</p>
        <div className="w-36 text-[0.7rem] leading-snug text-custom-gray">
         {medicine.description}
        </div>
        <span className="text-[0.6rem] font-bold">Stock: {medicine.stock}</span>
        <div className="flex justify-between items-center w-44 mt-2">
         <div className="flex">
          <span className={`pr-1 align-super text-xs font-semibold ${ medicine.stock === 0 ? "text-custom-gray" : "text-custom-green"}`}>
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
          <span className="text-[0.5rem] font-semibold">
           {quantities[index]}
          </span>
          <button
           onClick={() => handleIncrease(index)}
           className={`w-6 h-6 flex justify-center items-center text-white rounded-full ${ medicine.stock === 0 ? "bg-custom-gray" : "bg-custom-green"}`}
           aria-label="Increase quantity"
           disabled={ medicine.stock === 0}
          >
           <span className={`pb-[1.1px] font-semibold text-lg text-white`}>+</span>
          </button>
         </div>
        </div>
       </li>
      ))}
     </ul>
    </div>
   </section>
   <section className="pt-6 px-4">
    <div className="flex justify-between">
     <h2 className="font-bold text-lg pl-4">Shopping Cart</h2>
    </div>
    <div>
     <p>Total Items: {cartItems}</p>
     <p>Total Cost: ${cartTotal.toFixed(2)}</p>
    </div>
   </section>
  </>
 );
};

export default Medicines;
