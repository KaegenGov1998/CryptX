import React from "react";
import {Dot} from "lucide-react"
import { useState } from "react";

const SideBar = ({Icon, PageName}) => {

  const [Clicked, setClicked] = useState(false);


  return (
    <>
      {/*Container for Entire SideBar*/}
      <div onClick={()=> setClicked(!Clicked ? true : false)} className="cursor-pointer" >
        {/*Container for Panel*/}
        <div className="flex flex-row text-[#9E9E9E]">
          <div className={`flex flex-row gap-5 h-8 mb-8 w-full text-sm ${Clicked ? 'text-[#6154F0]' : 'text-[#9E9E9E]'}`}>
            <Icon />
            <div>{PageName}</div>
          </div>
          <div className={`mr-3 ${Clicked ? 'block text-[#6154F0]' : 'hidden'}`}>
            <Dot />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
