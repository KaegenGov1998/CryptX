import React from "react";
import { ChevronUp } from "lucide-react";
import { ChevronDown } from "lucide-react";

const CardContent = ({ CardContentIcon, stockPercent, stockIncrease, stockPrice, stockName }) => {
  return (
    <>
      <div
        className="flex flex-col justify-between w-[252px] h-[205px] p-[30px] m-5
     bg-white border-0 rounded-md shadow-sm"
      >
        <div className="flex flex-row justify-between">
          <div>
            <CardContentIcon
              alt=""
              className="h-[52px] w-[52px] bg-yellow-400 border-0 rounded-md"
            />{" "}
            {/*change this to an img*/}
          </div>

          <div className="flex flex-row gap-1 items-center h-[52px]">
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
