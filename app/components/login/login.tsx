"use client";

import Image from "next/image";

import { useRouter } from "next/navigation";

const Login = () => {
 const router = useRouter(); // Initialize the router

 const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
  // Add login logic here (e.g., authentication)
  router.push("/home"); // Redirect to /home after successful login
 };

 return (
  <>
   <div className="flex w-full h-screen bg-custom-background  ">
    <div className="w-[50%] h-full">
     <Image
      src="/boxes2.jpg"
      alt="shopping cart"
      className="object-cover w-full h-full"
      width={250}
      height={220}
     />
    </div>
    <div className="flex flex-col justify-center items-center px-20 rounded shadow-md w-[50%]">
     <h1 className="text-2xl font-bold mb-6">Sign in to Salesai</h1>
     <form onSubmit={handleSubmit} className="w-full px-20">
      <div className="mb-4 bg-custom-logininput">
       <input
        type="text"
        className="w-full py-2 px-4 border border-gray-300 rounded-3xl"
        placeholder="Email"
       />
      </div>
      <div className="mb-6">
       <input
        type="password"
        className="w-full py-2 px-4 border border-gray-300 rounded-3xl"
        placeholder="Password"
       />
      </div>
      <button
       type="submit"
       className="w-full bg-custom-green text-white p-2 rounded-3xl"
      >
       Sign in
      </button>
     </form>
    <div className="pt-1">
    <span>Do not have an account?</span> <button className="text-custom-green font-semibold">Sign Up now</button>
    </div>
    </div>
   </div>
  </>
 );
};

export default Login;
