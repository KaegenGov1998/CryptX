import React from 'react'
import { Bitcoin } from "lucide-react";

const LiveMarket = () => {
  return (
    <>
      <div className='w-173 h-89.5 ml-10  bg-amber-200'>
        <div className='font-semibold text-xl pb-6'>Live Market</div>

        <div className='w-full flex flex-row bg-red-200'>
          <div className='border-2 border-[#F8F8F8] rounded-4xl mr-3.5'>
            < Bitcoin className='w-12.5 h-12.5' />
          </div>

          <div className='w-26'>
            <div className='font-5.5 font-semibold'>
              Bitcoin
            </div>
            <div className='font-5 text-[#9E9E9E]'>
              ETC/ USDT
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='font-5.5 font-semibold'>
              Bitcoin
            </div>
            <div className='font-5 text-[#9E9E9E]'>
              ETC/ USDT
            </div>
          </div>

        </div>

      </div >
    </>
  )
}

export default LiveMarket