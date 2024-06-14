import Image from "next/image";

const Medicines = () => {
 return (
  <>
   <article className="pt-6 px-4">
    <div className="flex justify-between">
     <h2 className="font-bold text-lg pl-4">Medicines</h2>
     <button className=" text-custom-green font-semibold underline">See all</button>
    </div>
    <div className="flex justify-center items-center">
     <ul className="grid grid-cols-2 pt-2">
      <li className="mx-2 pt-3">
       <div className="relative w-full pb-[65.25%]">
        <Image
         src="/para.jpg"
         alt="para"
         className="rounded-lg object-cover"
         layout="fill"
        />
       </div>
       <p className="pt-3 text-sm font-semibold">Paracetamol Berno</p>
       <div className=" w-36 text-[0.7rem] leading-snug text-custom-gray">
        Paracetamol works by inhibiting the production of certain chameical..
       </div>
       <span className="text-[0.6rem] font-bold">Stock:12</span>
       <div className="flex justify-between items-center w-44">
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
      <li className="mx-2 pt-3">
       <div className="relative w-full pb-[65.25%]">
        <Image
         src="/vento.jpg"
         alt="para"
         className="rounded-lg object-cover"
         layout="fill"
        />
       </div>
       <p className="pt-3 text-sm font-semibold">Paracetamol Berno</p>
       <div className=" w-36 text-[0.7rem] leading-snug text-custom-gray">
        Paracetamol works by inhibiting the production of certain chameical..
       </div>
       <span className="text-[0.6rem] font-bold">Stock:12</span>
       <div className="flex justify-between items-center w-44">
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
      <li className="mx-2 pt-3">
       <div className="relative w-full pb-[65.25%]">
        <Image
         src="/injection.jpg"
         alt="para"
         className="rounded-lg object-cover"
         layout="fill"
        />
       </div>
       <p className="pt-3 text-sm font-semibold">Paracetamol Berno</p>
       <div className=" w-36 text-[0.7rem] leading-snug text-custom-gray">
        Paracetamol works by inhibiting the production of certain chameical..
       </div>
       <span className="text-[0.6rem] font-bold">Stock:12</span>
       <div className="flex justify-between items-center w-44">
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
      <li className="mx-2 pt-3">
       <div className="relative w-full pb-[65.25%]">
        <Image
         src="/Capsule.jpg"
         alt="para"
         className="rounded-lg object-cover"
         layout="fill"
        />
       </div>
       <p className="pt-3 text-sm font-semibold">Paracetamol Berno</p>
       <div className=" w-36 text-[0.7rem] leading-snug text-custom-gray">
        Paracetamol works by inhibiting the production of certain chameical..
       </div>
       <span className="text-[0.6rem] font-bold">Stock:12</span>
       <div className="flex justify-between items-center w-44">
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
     </ul>
    </div>
   </article>
  </>
 );
};

export default Medicines;
