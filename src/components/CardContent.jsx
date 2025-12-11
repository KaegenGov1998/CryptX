import React from "react";
import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";

const CardContent = ({ CardContentIcon, stockPercent, stockIncrease, stockPrice, stockName }) => {
  return (
    <>
      <div
        className="flex flex-col justify-between w-63 h-51 p-7.5 m-5 ml-10
     bg-white border-0 rounded-md shadow-sm"
      >
        <div className="flex flex-row justify-between">
          <div>
            <CardContentIcon
              alt=""
              className="h-13 w-13 bg-yellow-400 border-0 rounded-md"
            />{" "}
            {/*change this to an img*/}
          </div>

          <div className={`flex flex-row gap-1 items-center h-[52px] ${stockIncrease ? 'text-green-300' : 'text-red-400'}`}>
            <div>{stockIncrease ? <ChevronUp /> : <ChevronDown />}</div>
            <div>
              {stockIncrease ? "+" : "-"} {stockPercent}%
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 ">
          <div className="text-3xl font-bold">
            ${stockPrice}
          </div>
          <div className="text-sm font-light">
            {stockName}
          </div>

        </div>
      </div>
    </>
  );
};

export default CardContent;
