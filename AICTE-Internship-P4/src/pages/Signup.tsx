import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserPlus } from "lucide-react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup attempt:", { name, email, password });
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-500 to-green-600 p-6">
      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200">
        <div className="flex items-center justify-center mb-6">
          <UserPlus className="h-10 w-10 text-emerald-600" />
          <h2 className="text-3xl font-bold text-gray-900 ml-2">Create Account</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-800">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-400 shadow-sm bg-gray-100"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-800">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-400 shadow-sm bg-gray-100"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-800">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-400 shadow-sm bg-gray-100"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 px-4 rounded-lg text-lg font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-emerald-600 hover:text-green-700 font-semibold">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
