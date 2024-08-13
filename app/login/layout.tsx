"use client";

import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter(); // Initialize the router

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add login logic here (e.g., authentication)
    router.push("/home"); // Redirect to /home after successful login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <form onSubmit={handleSubmit}> {/* Attach handleSubmit to form */}
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-custom-green text-white p-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
