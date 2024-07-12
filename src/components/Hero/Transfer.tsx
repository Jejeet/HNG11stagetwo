import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'


export default function Transfer(){
  return (
    <div className="w-full max-w-md mx-auto mt-20 mb-60 flex flex-col items-center space-y-8 px-4">
    <p className="text-2xl">Card Payment</p>
    <div className="space-y-6 bg-[#E1E6FA] p-6 sm:p-10 w-full flex flex-col items-center">
      <h2 className="text-lg sm:text-xl">Transfer to the following account</h2>
      <div className="flex flex-col items-start space-y-2 self-start w-full">
        <p className="text-lg sm:text-2xl">Bank Name:</p>
        <p className="text-gray-400 font-extralight">Carbon</p>
      </div>
  
      <div className="flex flex-col items-start space-y-2 self-start w-full">
        <p className="text-lg sm:text-2xl">Account Number:</p>
        <p className="text-gray-400 font-extralight">0152398943</p>
      </div>
  
      <div className="flex flex-col items-start space-y-2 self-start w-full">
        <p className="text-lg sm:text-2xl">Account Name:</p>
        <p className="text-gray-400 font-extralight">HNG Limited</p>
      </div>
      
      <div className="flex flex-col items-start space-y-2 self-start w-full">
        <p className="text-sm text-red-800 font-light">Please transfer exact Amount to avoid failure</p>
        <div>
          <p className="text-gray-400 font-extralight">Amount To Be Paid</p>
          <p>#180,000</p>
        </div>
      </div>
      
      <Link to={"/card"}>
        <Button className="w-full sm:w-60 mt-8 py-4 px-3 bg-[#183152] hover:bg-[#183152]">MAKE PAYMENT</Button>
      </Link>
    </div>
  </div>
  
  )
}

