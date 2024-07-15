import { MoveLeft,  } from 'lucide-react'
import React from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CartTableContent from '@/pages/CartTableContent'

const CartHero = () => {
  return (
    <div className='container  px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center space-x-2 mb-4'>
        <MoveLeft />
        <p className="ml-2">CONTINUE SHOPPING</p>
        </div>
        <div>
            <p className='text-[24px] md:text-[40px]'>Shopping Bag (7 items)</p></div>
        <div className='flex  justify-between bg-[#ABC8E2] py-1 px-6 mt-5'>
           <p>Products</p>
            <div className=' hidden md:flex gap-x-40'>
                <div> <p>Unit Price</p></div>
                <div><p>Quantity</p></div>
                <div><p>Unit Price</p></div>
            </div>
        </div>

        <CartTableContent/>
        <CartTableContent/>
        <CartTableContent/>

             
<div className='hidden md:flex md:items-center md:justify-between md:h-44 md:my-6 md:gap-5 '>
<div className='flex flex-col space-y-3 basis-[45%]' >
    <p>Discount or gift voucher?</p>
    <div className='flex space-x-8'> 
    <Input type="email" placeholder="Email" className='w-full flex-1' />
    <Button className='bg-[#375D81] px-10' >REDEEM</Button>
    </div>
</div>
<div className='border border-gray-950 h-full '></div>

<div className='flex items-start justify-between basis-[45%]'>
 <p>Subtotal</p>
 <div className='flex flex-col space-y-20'>
   <div className='flex flex-col text-center space-y-2'>
    <p  className=' font-bold text-xl '># 180, 000</p>
    <p className='font-extralight text-sm'>(Excluding delivery fee)</p>
  </div>
    <Button className= "bg-[#375D81] px-10">  PROCEED TO CHECKOUT</Button>
 </div>
 </div>
</div>


    </div>
   
   
  )
}

export default CartHero