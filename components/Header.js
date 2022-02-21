import Image from "next/image";
import React, { useState } from "react";
import { UsersIcon } from "@heroicons/react/solid";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  const resetInput = () => {
    setSearchInput("");
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10  items-center">
      <div className="relative flex items-center h-10 cursor-pointer my-auto ">
        <Image
          src="/logo.jpg"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          alt="logo"
        />
      </div>
      <div className="flex items-center justify-between md:border-2 rounded-full py-2  md:shadow-sm">
        <input
          type="text"
          placeholder="Start your search"
          className="pl-5 bg-transparent outline-none flex-grow text-gray-600 text-sm placeholder-gray-400"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
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
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-5">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex justify-center items-center border-b mb-4 p-1 border-red-300">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of guests{" "}
            </h2>
            <UsersIcon className="h-5" />
            <input
              type="number"
              className="w-12 pl-2  text-lg outline-none text-red-400"
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
              max={10}
            />
          </div>

          <div className="flex justify-around items-center">
            <button className="text-gray-400" onClick={resetInput}>
              Cancel
            </button>
            <button className="text-red-500">Search</button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
