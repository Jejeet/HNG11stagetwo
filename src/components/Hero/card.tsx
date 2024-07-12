import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

const card = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-20 mb-60 flex flex-col items-center space-y-8 px-4">
    <p className="text-2xl">Card Payment</p>
    <form action="" method="post" className="space-y-6 bg-[#E1E6FA] p-6 sm:p-10 w-full flex flex-col items-center">
      <div className="flex flex-col items-start space-y-2 w-full">
        <Label htmlFor="cardNumber">Card Number</Label>
        <Input placeholder="0000 0000 0000 0000" className="w-full flex focus-visible:ring-0 border-[0.5px] border-gray-400 focus-visible:ring-offset-0"/>
      </div>
  
      <div className="flex flex-row sm:flex-row sm:items-center sm:space-x-8 justify-between w-full  sm:space-y-0">
        <div className="flex flex-col items-start space-y-2 w-full sm:w-auto">
          <Label htmlFor="expDate">Expiring Date</Label>
          <div className="flex items-start space-x-4">
            <Input placeholder="MM" className="w-14 flex focus-visible:ring-0 focus-visible:ring-offset-0 border-[0.5px] border-gray-400" />
            <Input placeholder="YY" className="w-14 flex focus-visible:ring-0 focus-visible:ring-offset-0 border-[0.5px] border-gray-400" />
          </div>
        </div>
  
        <div className="flex flex-col items-start space-y-2 w-full sm:w-auto">
          <Label htmlFor="cvv">CVV</Label>
          <Input placeholder="000" className="w-14 flex focus-visible:ring-0 focus-visible:ring-offset-0 border-[0.5px] border-gray-400" />
        </div>
      </div>
  
      <Link to={"/transfer"}>
        <Button className="w-full sm:w-60 mt-14 py-4 px-3 bg-[#183152] hover:bg-[#183152]">PROCEED TO PAYMENT</Button>
      </Link>
    </form>
  </div>
  
  )
}

export default card



