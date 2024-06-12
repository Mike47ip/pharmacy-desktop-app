import Image from "next/image";
import {
 MagnifyingGlassIcon,
 ViewfinderCircleIcon,
} from "@heroicons/react/24/solid";
interface BodyProps {
 // Define props here if needed
}

const Body: React.FC<BodyProps> = () => {
 return (
  <>
   <article className="flex justify-center items-center">
    <ul className="flex flex-col w-10/12 justify-center font-open-sans items-center border-[1px] border-custom-400 rounded-2xl">
     <li className="flex w-full p-3 justify-between font-medium border-b-[1px] border-custom-400 rounded-2xl">
      {" "}
      <div className="flex gap-[4px] flex-col">
       <span className="text-[0.7rem] font-semibold text-custom-gray">
        Your Waitlist Number
       </span>
       <p className="text-[0.9rem] font-semibold">
        A1<span className="text-custom-gray">#1219</span>
       </p>
      </div>{" "}
      <div className="flex justify-center items-center h-9 px-2 rounded-xl gap-2 bg-custom-lightgreen ">
       <span className="">
        <ViewfinderCircleIcon className="text-custom-green w-5 " />
       </span>
       <p className="text-custom-green text-sm font-semibold ">Scan Again</p>
      </div>
     </li>
     <li className="flex w-full p-3 justify-between font-medium">
      {" "}
      <div className="flex gap-[4px] flex-col">
       <span className="text-[0.7rem] font-semibold text-custom-gray">
        Your Name
       </span>
       <p className="text-[0.9rem] font-semibold">Nana Adjei</p>
      </div>{" "}
      <div className="flex justify-center items-center">
       <p className="text-sm font-semibold ">
        <span className="text-custom-green">3 </span>items
       </p>
      </div>
     </li>
    </ul>
   </article>

   <article>
    <div className="flex justify-center items-center px-4">
    <div className="absolute left-11 mt-10">
     <MagnifyingGlassIcon className="w-7 text-custom-gray" />
    </div>
     <input
      type="text"
      className="border border-gray-300 w-11/12 bg-custom-backgray rounded-full round px-12 py-7 h-6 mt-9 text-sm border-custom-backgray focus:outline-none focus:border-blue-500"
      placeholder="Search collection..."
     />
     
    </div>
   </article>

   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laudantium reprehenderit aperiam fugiat sint aspernatur nihil distinctio, incidunt autem, animi ad doloribus dolor architecto ipsa! Dolorum excepturi modi dolor et.</p>
  </>
 );
};

export default Body;
