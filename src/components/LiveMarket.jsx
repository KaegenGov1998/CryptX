import React from 'react'
import { Bitcoin } from "lucide-react";

const LiveMarket = ({CryptoName, TickerSymbol, Change, IsChangeIncrease, Price}) => {
  return (
    <>

      <div className='w-full flex flex-row mb-8'>
        <div className='border-2 border-[#F8F8F8] rounded-4xl mr-3.5'>
          < Bitcoin className='w-12.5 h-12.5' />
        </div>

        <div className='w-26'>
          <div className='font-5.5 font-semibold text-sm h-[50%]'>
            {CryptoName}
          </div>
          <div className='font-5 text-[#9E9E9E] text-sm h-[50%]'>
            {TickerSymbol}
          </div>
        </div>

        <div className='w-26 ml-17 flex flex-col'>
          <div className='font-5.5 h-[50%] font-semibold text-xs text-[#9E9E9E] '>
            Change
          </div>
          <div className={`font-5 text-sm h-[50%] ${IsChangeIncrease ? 'text-green-300' : 'text-red-300'}`}>
            {IsChangeIncrease ? '+' : '-'} {Change} %
          </div>
        </div>

        <div className='w-26 ml-12 flex flex-col'>
          <div className='font-5.5 h-[50%] font-semibold text-xs text-[#9E9E9E] '>
            Price
          </div>
          <div className='font-5 text-sm h-[50%]'>
            {Price} USD
          </div>
        </div>

        <div className='w-40.5 bg-amber-700 ml-10'>Hello</div>

      </div>

    </>
  )
}

export default LiveMarket