import React from "react";
import { Search, Bell, CircleQuestionMark } from "lucide-react";
import { grayCircle } from "../assets";

const NavBar = () => {
  return (
    <>
      <div className=""></div>

      <div className="flex flex-row flex-wrap box-border h-20 mx-10 my-[30px] justify-between items-center border-b-2 border-[#F8F8F8]">
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

        <div className="flex flex-row justify-between items-center">
          <Bell />
          <CircleQuestionMark />

          <div className="flex flex-row">
            <img src={grayCircle} alt=""  className="h-10 w-10 "/>
            <div className="flex flex-col">
              <div className="h-[21px]">
              Laurice
              </div>
              <div className="h-[21px]">
              @Laurice22
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
