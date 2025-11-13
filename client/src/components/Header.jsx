import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-emerald-600 to-emerald-700 shadow-md text-white">
      <div className="flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto p-4 gap-4">
        {/* Logo */}
        <Link to="/">
          <h1 className="font-semibold text-xl sm:text-2xl flex items-center">
            <span className="text-white tracking-wide">Harvest</span>
            <span className="text-blue-200 ml-1 font-bold">Hub</span>
          </h1>
        </Link>

        {/* Search bar */}
        <form className="relative w-full sm:w-80">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 rounded-full text-gray-800 placeholder-gray-500 
                       focus:outline-none focus:ring-2 focus:ring-emerald-300 
                       shadow bg-white"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 
                       bg-emerald-600 hover:bg-emerald-700 text-white 
                       px-4 py-1 rounded-full text-sm font-medium transition-all"
          >
            Go
          </button>
        </form>

        {/* Navigation Links */}
        <ul className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm sm:text-base">
          {/* Links hidden on small screens */}
          <li className="hidden sm:inline">
            <Link
              to="/"
              className="cursor-pointer hover:text-emerald-200 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li className="hidden sm:inline">
            <Link
              to="/farmers"
              className="cursor-pointer hover:text-emerald-200 transition-colors duration-200"
            >
              Farmers
            </Link>
          </li>
          <li className="hidden sm:inline">
            <Link
              to="/intake"
              className="cursor-pointer hover:text-emerald-200 transition-colors duration-200"
            >
              Intake
            </Link>
          </li>
          <li className="hidden sm:inline">
            <Link
              to="/payout"
              className="cursor-pointer hover:text-emerald-200 transition-colors duration-200"
            >
              Payout
            </Link>
          </li>

          {/* Sign In always visible */}
          <li>
            <Link
              to="/signin"
              className="bg-white text-emerald-700 font-semibold px-4 py-1.5 rounded-full hover:bg-emerald-100 transition-all duration-200"
            >
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
