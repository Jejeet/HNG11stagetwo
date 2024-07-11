import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

const card = () => {
  return (
    <div className=' w-1/3 mx-auto mt-20 mb-60  flex flex-col items-center space-y-8'>
        <p className='text-2xl'>Card Payment</p>
        <form action="" method="post" className='space-y-6 bg-[#E1E6FA] p-10 w-full flex flex-col items-center'>  
         
        <div className="flex flex-col items-start space-y-2 w-full">
        <Label htmlFor="r3">Card Number</Label>
        <Input placeholder='0000 0000 0000 0000'  className='flex focus-visible:ring-0 border-[0.5px] border-gray-400 focus-visible:ring-offset-0'/>
         </div>

      <div className='flex items-center space-x-8 justify-between w-full '>
        <div className="flex flex-col  items-start space-y-2">
        <Label htmlFor="r3">Expiring Date</Label>
        <div className='flex items-start space-x-4'>
        <Input placeholder='MM' className='w-14 flex focus-visible:ring-0 focus-visible:ring-offset-0 border-[0.5px] border-gray-400 ' />
        <Input placeholder='YY' className='w-14 flex focus-visible:ring-0 focus-visible:ring-offset-0 border-[0.5px] border-gray-400 '/>
        </div>
       
      </div>
     
      <div className="flex flex-col  items-start space-y-2">
        <Label htmlFor="r3" >CVV</Label>
        <Input placeholder='000' className='w-14 flex focus-visible:ring-0 focus-visible:ring-offset-0 border-[0.5px] border-gray-400 ' />
        </div>
        
      </div>
       <Link to={"/transfer"}><Button className=" w-60 mt-14 py-6 px-3 bg-[#183152] hover:bg-[#183152]">PROCEED TO PAYMENT</Button></Link>
    </form>

    </div>
  )
}

export default card



