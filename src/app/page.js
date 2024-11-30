"use client";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Welcome to Our Platform</h1>
        <div className="space-y-4">
          <LoginLink>
            <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
              Sign In
            </button>
          </LoginLink>
          <div/>
          <div className="space-y-4"></div>
          <RegisterLink>
            <button className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-300">
              Sign Up
            </button>
          </RegisterLink>
        </div>
      </div>
    </div>
  );
}