import React from "react";
import { LayoutGrid, Dot, Infinity, ChartPie, Wallet, Mail, Settings, LogOut } from "lucide-react";

const SideBar = () => {
  return (
    <>
      {/*Container for Entire SideBar*/}
      <div className="flex flex-col w-66 h-screen pl-10 bg-[#F3F3F3]">

        {/*Banner*/}
         <div className="flex flex-row items-center mt-8 mb-16 gap-2.5 font-bold text-2xl">
          <div className="text-[#6154F0]">
          <Infinity />
          </div>         
          CryptX
        </div>

        {/*Container for Panel 1*/}
        <div className="flex flex-row text-[#9E9E9E]">
          <div className="flex flex-row gap-5 mb-6 w-full text-sm">
            <LayoutGrid />
            <div>Overview</div>
          </div>
          <div className="mr-3">
            <Dot />
          </div>
        </div>

        {/*Container for Panel 2*/}
        <div className="flex flex-row text-[#9E9E9E]">
          <div className="flex flex-row gap-5 mb-6 w-full text-sm">
            <ChartPie />
            <div>Chart</div>
          </div>
          <div className="mr-3">
            <Dot />
          </div>
        </div>

        {/*Container for Panel 3*/}
        <div className="flex flex-row text-[#9E9E9E]">
          <div className="flex flex-row gap-5 mb-6 w-full text-sm">
            <LayoutGrid />
            <div>Transaction</div>
          </div>
          <div className="mr-3">
            <Dot />
          </div>
        </div>

        {/*Container for Panel 4*/}
        <div className="flex flex-row text-[#9E9E9E]">
          <div className="flex flex-row gap-5 mb-6 w-full text-sm">
            <Wallet  />
            <div>Wallet</div>
          </div>
          <div className="mr-3">
            <Dot />
          </div>
        </div>

        {/*Container for Panel 5*/}
        <div className="flex flex-row text-[#9E9E9E]">
          <div className="flex flex-row gap-5 mb-6 w-full text-sm">
            <Mail  />
            <div>Mail Box</div>
          </div>
          <div className="mr-3">
            <Dot />
          </div>
        </div>

        {/*Container for Panel 6*/}
        <div className="flex flex-row text-[#9E9E9E]">
          <div className="flex flex-row gap-5 mb-6 w-full text-sm">
            <Settings  />
            <div>Setting</div>
          </div>
          <div className="mr-3">
            <Dot />
          </div>
        </div>

        {/*Container for Panel 7*/}
        <div className="flex flex-row text-[#9E9E9E]">
          <div className="flex flex-row gap-5 mb-6 w-full text-sm">
            <LogOut  />
            <div>Logout</div>
          </div>
          <div className="mr-3">
            <Dot />
          </div>
        </div>

      </div>
    </>
  );
};

export default SideBar;
