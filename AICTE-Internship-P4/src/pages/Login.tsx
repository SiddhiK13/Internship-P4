import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-teal-500 to-green-600 p-6">
      <div className="bg-white/80 backdrop-blur-lg p-10 rounded-xl shadow-2xl w-full max-w-md border border-gray-200">
        <div className="flex items-center justify-center mb-6">
          <LogIn className="h-12 w-12 text-teal-600" />
          <h2 className="text-3xl font-bold text-gray-900 ml-3">Sign In</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-800">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-teal-600 focus:ring-2 focus:ring-teal-400 shadow-sm bg-gray-100"
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
              className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-teal-600 focus:ring-2 focus:ring-teal-400 shadow-sm bg-gray-100"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-green-600 text-white py-3 px-4 rounded-lg text-lg font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-700">
          Don't have an account?{" "}
          <Link to="/signup" className="text-teal-600 hover:text-green-700 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
