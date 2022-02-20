import Image from "next/image";
import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto ">
        <Image
          src="/logo.jpg"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      <div className="flex items-center justify-between md:border-2 rounded-full py-2 ">
        <input
          type="text"
          placeholder="Start your search"
          className="pl-5 bg-transparent outline-none flex-grow"
        />
        <SearchIcon className="hidden h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:inline-flex mr-1" />
      </div>
      <div></div>
    </header>
  );
}

export default Header;
