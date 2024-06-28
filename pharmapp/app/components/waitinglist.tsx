"use client";
import React, { useState } from "react";
import Image from "next/image";

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
}

export const WaitingList: React.FC<WaitingListProps> = ({ medicines }) => {
  console.log("medicines prop in WaitingList:", medicines); // Log the medicines prop

  const [quantities, setQuantities] = useState<number[]>(
    Array(medicines.length).fill(0)
  );
  const [cartItems, setCartItems] = useState<number>(0);
  const [cartTotal, setCartTotal] = useState<number>(0);
  const [isCartVisible, setIsCartVisible] = useState<boolean>(false);

  const handleIncrease = (index: number) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] += 1;
      return newQuantities;
    });

    setCartItems((prevItems) => prevItems + 1);
    setCartTotal((prevTotal) => prevTotal + medicines[index].price);
    setIsCartVisible(true);
  };

  const handleDecrease = (index: number) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      if (newQuantities[index] > 0) {
        newQuantities[index] -= 1;
      }
      return newQuantities;
    });

    setCartItems((prevItems) => prevItems - 1);
    setCartTotal((prevTotal) => prevTotal - medicines[index].price);
    if (
      quantities.reduce((acc, currentQuantity) => acc + currentQuantity, 0) === 0
    ) {
      setIsCartVisible(false);
    }
  };

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
          <ul className="flex flex-col gap-4">
            {medicines.map((medicine, index) => (
              <li key={index} className="flex items-center ">
                <div className="object-cover w-full">
                <Image
          src={medicine.src}
          alt={medicine.alt}
          className="object-cover p-5 rounded-3xl"
          width={300}
          height={250}
         />
                </div>
                <div>
                  <p className="font-bold">{medicine.title}</p>
                  <p className="text-sm text-gray-500">{quantities[index]} items</p>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleDecrease(index)}
                    className={`bg-white w-8 h-8 flex justify-center items-center rounded-full ${
                      quantities[index] === 0 ? "cursor-not-allowed" : "text-custom-green"
                    }`}
                    aria-label="Decrease quantity"
                    disabled={quantities[index] === 0}
                  >
                    <span className="font-semibold text-3xl">-</span>
                  </button>
                  <button
                    onClick={() => handleIncrease(index)}
                    className="w-8 h-8 flex justify-center items-center bg-custom-green rounded-full"
                    aria-label="Increase quantity"
                  >
                    <span className="font-semibold text-2xl text-white">+</span>
                  </button>
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
