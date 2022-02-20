import Image from "next/image";
import React from "react";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10  items-center">
      <div className="relative flex items-center h-10 cursor-pointer my-auto ">
        <Image
          src="/logo.jpg"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center justify-between md:border-2 rounded-full py-2  md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="pl-5 bg-transparent outline-none flex-grow text-gray-600 text-sm placeholder-gray-400"
        />
        <SearchIcon className="hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:inline-flex mr-1 md:mx-2 " />
      </div>
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="cursor-pointer hidden md:inline-flex">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer " />
        <div className="flex items-center justify-between md:border-2 rounded-full py-2  md:shadow-sm space-x-2 p-2">
          <MenuIcon className="h-6 cursor-pointer " />
          <UserCircleIcon className="h-6 cursor-pointer " />
        </div>
      </div>
    </header>
  );
}

export default Header;
