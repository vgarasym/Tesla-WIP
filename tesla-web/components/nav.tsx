import React from "react";
import Link from "next/link";
import { BsQuestionCircleFill } from "react-icons/bs";
import { IoGlobe, IoPersonCircle } from "react-icons/io5";

function Navbar() {
  return (
    <div className="flex justify-between items-center mt-4">
      <div className="ml-8">
        <Link href="/">
          <svg
            className="h-6 w-32"
            viewBox="0 0 342 35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7m0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7M308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7"
            ></path>
          </svg>
        </Link>
      </div>
      <div>
        <ul className="flex flex-row font-medium text-[15px]">
          <li className="hover:bg-black/10 px-4 py-1 cursor-pointer hover:rounded-md">
            Vehicles
          </li>
          <li className="hover:bg-black/10 px-4 py-1 cursor-pointer hover:rounded-md">
            Energy
          </li>
          <li className="hover:bg-black/10 px-4 py-1 cursor-pointer hover:rounded-md">
            Charging
          </li>
          <li className="hover:bg-black/10 px-4 py-1 cursor-pointer hover:rounded-md">
            Discover
          </li>
          <li className="hover:bg-black/10 px-4 py-1 cursor-pointer hover:rounded-md">
            Shop
          </li>
        </ul>
      </div>
      <div className="flex flex-row justify-evenly space-x-1 mr-4">
        <button className="p-2 hover:bg-black/5 hover:rounded-lg cursor-pointer">
          <BsQuestionCircleFill size={22} color="white" />
        </button>
        <button className="p-2 hover:bg-black/5 hover:rounded-lg cursor-pointer">
          <IoGlobe size={22} color="white" />
        </button>
        <button className="p-2 hover:bg-black/5 hover:rounded-lg cursor-pointer">
          <IoPersonCircle size={22} color="white" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
