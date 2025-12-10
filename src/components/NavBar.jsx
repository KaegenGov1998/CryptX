import React from "react";
import { Search, Bell, CircleQuestionMark, ChevronDown } from "lucide-react";
import { grayCircle } from "../assets";

const NavBar = () => {
  return (
    <>
      <div className=""></div>

      <div className="flex flex-row flex-wrap box-border h-40 sm:h-20 mx-10 my-8 justify-center sm:justify-between border-b-2 border-[#F8F8F8]">
        <div
          className="flex flex-row justify-between items-center h-10 w-[355px] p-2.5 
         border-2 border-[#F8F8F8] rounded-xl"
        >
          <input
            type="search"
            id="search"
            placeholder="Search type of Keywords"
          ></input>
          <button className="cursor-pointer">
            <Search />
          </button>
        </div>

        <div className="flex flex-row gap-x-16 justify-between">

          <div className="flex flex-row gap-x-8 py-2">
          <Bell />
          <CircleQuestionMark />
          </div>

          <div className="flex flex-row gap-x-2.5">
            <img src={grayCircle} alt=""  className="h-10 w-10"/>
            <div className="flex flex-col">
              <div className="h-5 font-bold">
              Laurice
              </div>
              <div className="h-5">
              @Laurice22
              </div>

            </div>

            <div className="h-12 w-6 py-2 flex justify-center">
            <ChevronDown / >
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
