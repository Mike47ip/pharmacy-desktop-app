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
      description: "Paracetamol works by inhibiting the production of certain chemicals..",
      stock: 12,
      price: 3.75,
    },
    {
      src: "/vento.jpg",
      alt: "vento",
      title: "Vento Syrup",
      description: "Vento Syrup is used for treating cough and cold of different kinds..",
      stock: 15,
      price: 4.50,
    },
    {
      src: "/injection.jpg",
      alt: "injection",
      title: "Injection Fluid",
      description: "Used for intravenous administration to treat various conditions..",
      stock: 8,
      price: 5.20,
    },
    {
      src: "/capsule.jpg",
      alt: "capsule",
      title: "Capsule Medicine",
      description: "Effective in treating chronic illnesses with minimal side effects..",
      stock: 10,
      price: 2.99,
    },
  ];

  const [quantities, setQuantities] = useState<number[]>(Array(medicinesData.length).fill(0));
  const [cartItems, setCartItems] = useState<number>(0);
  const [cartTotal, setCartTotal] = useState<number>(0);

  const handleIncrease = (index: number) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      if (newQuantities[index] < medicinesData[index].stock) {
        newQuantities[index] += 1;
        setCartItems((prevItems) => prevItems + 1);
        setCartTotal((prevTotal) => prevTotal + medicinesData[index].price);
      }
      return newQuantities;
    });
  };

  const handleDecrease = (index: number) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      if (newQuantities[index] > 0) {
        newQuantities[index] -= 1;
        setCartItems((prevItems) => prevItems - 1);
        setCartTotal((prevTotal) => prevTotal - medicinesData[index].price);
      }
      return newQuantities;
    });
  };

  return (
    <>
      <section className="pt-6 px-4">
        <div className="flex justify-between">
          <h2 className="font-bold text-lg pl-4">Medicines</h2>
          <button className="text-custom-green font-semibold underline">See all</button>
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
                    <span className="text-custom-green pr-1 align-super text-xs font-semibold">
                      $
                    </span>
                    <p className="font-bold font-open-sans">{medicine.price.toFixed(2)}</p>
                  </div>
                  <div className="bg-slate-100 w-20 p-1 flex justify-between items-center rounded-2xl">
                    <button
                      onClick={() => handleDecrease(index)}
                      className="bg-white w-6 h-6 flex justify-center items-center rounded-full"
                      aria-label="Decrease quantity"
                    >
                      <span className="text-custom-green font-semibold text-lg">-</span>
                    </button>
                    <span className="text-[0.5rem] font-semibold">{quantities[index]}</span>
                    <button
                      onClick={() => handleIncrease(index)}
                      className="bg-custom-green w-6 h-6 flex justify-center items-center text-white rounded-full"
                      aria-label="Increase quantity"
                    >
                      <span className="pb-[1.1px] font-semibold text-lg">+</span>
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
