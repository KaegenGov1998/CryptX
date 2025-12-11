import React from 'react'
import { MoveUp, MoveDown } from 'lucide-react';

const Transaction = ({CryptoName, RecievedOrBuy, CashPrice, Day, Time}) => {
  return (
    <>
      <div className='w-80 h-12.5 mb-8 flex flex-row'>
        <div className={`h-10 w-10 mr-2.5 flex items-center justify-center  border-2 border-[#E4E4E4] rounded-4xl ${RecievedOrBuy ? 'text-green-400' : 'text-red-400'}`}>
          {RecievedOrBuy ? < MoveUp className='h-10 w-10'/> : < MoveDown className='h-10 w-10'/>}
        </div>

        <div className='flex flex-row justify-between w-full'>
          <div className='flex flex-col justify-between'>
            <div className='font-5.5 font-semibold text-sm'>
              {CryptoName}
            </div>
            <div className='font-semibold text-xs text-[#9E9E9E]'>
              {RecievedOrBuy ? 'Recieved' : 'Buy'}
            </div>
          </div>
          <div className='flex flex-col justify-between'>
            <div className='font-5.5 font-semibold text-sm'>
              $ {CashPrice}
            </div>
            <div className='font-semibold text-xs text-[#9E9E9E]'>
              {Day}, {Time}
            </div>
            
          </div>
        </div>


      </div>

    </>
  )
}

export default Transaction