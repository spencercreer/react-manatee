import React from "react";
import { useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className="bg-white shadow-lg w-full z-50">
      <div className="p-4">
        <div className="flex items-center justify-between py-4 px-8">
          <div className="text-xl font-bold">Intention</div>
          <div className="flex flex-row space-x-4">
            <a
              className={`flex space-x-4 ${
                pathname === "/" ? "text-blue-500 underline" : ""
              }`}
              href="/"
            >
              Dashboard
            </a>
            <a
              className={`flex space-x-4 ${
                pathname === "/activities" ? "text-blue-500 underline" : ""
              }`}
              href="/activities"
            >
              Today's Activities
            </a>
            <a
              className={`flex space-x-4 ${
                pathname === "/company" ? "text-blue-500 underline" : ""
              }`}
              href="/company"
            >
              Company List
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
