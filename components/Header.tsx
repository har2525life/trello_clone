"use client";

import Image from "next/image";
import React from "react";
import Logo from "@/public/images/trello.png";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-400 to-blue-600 bluer-3xl opacity-50 -z-50"></div>
        <div className="flex mb-10 md:mb-0 ">
          <Image
            src={Logo}
            alt="Trello Logo"
            width={100}
            height={300}
            className="w-10 md:w-14 object-contain"
          />
          <h1 className="text-2xl">Trello</h1>
        </div>
        <div className="flex items-center space-x-5 flex-1 justify-end w-full">
          <form
            action=""
            className="flex items-center space-x-5 bg-white rounded-md p-2 shadow-md flex-1 md:flex-initial"
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none p-2"
            />
            <button type="submit" hidden>
              Search
            </button>
          </form>

          {/* Avatar */}
          <Avatar name="Hikaru Sugita" round size="50" color="#0055D1" />
        </div>
      </div>
      <div className="flex items-center justify-center py-2">
        <p className="flex items-center test-sm font-light p-5 shadow-xl rounded-xl w-fit bg-white italic max-w-3xl text-[#0055D1]">
          <UserCircleIcon className="inline-block h-10 w-10 text-[#0055D1] mr-1" />
          GPT is summarising your tasks the day...
        </p>
      </div>
    </header>
  );
}

export default Header;
