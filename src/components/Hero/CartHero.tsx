import { Heart, MoveLeft, Trash2 } from 'lucide-react'
import React from 'react'
import Chairs from "@/assets/chairs.png"
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

const CartHero = () => {
  return (
    <div className='container '>
        <div className='flex'>
        <MoveLeft />
        <p >CONTINUE SHOPPING</p>
        </div>
        <div><p className='text-[40px]'>Shopping Bag (7 items)</p></div>
        <div className='flex justify-between bg-[#ABC8E2] py-1 px-6'>
           <p>Products</p>
            <div className='flex   gap-x-40'>
                <div> <p>Unit Price</p></div>
                <div><p>Quantity</p></div>
                <div><p>Unit Price</p></div>
            </div>
        </div>
          <Link to="/check"><div className='flex justify-between'>
            
            <div className='flex space-x-3'>
                <div className='bg-gray-100'><img src={Chairs} alt=""  className='w-[100px]'/>
                </div>
                <div className='py-3 space-y-3'> 
                <p className=''>Product Name - Color</p>
                <p className='text-sm font-light text-gray-500'>Estimated delivery within 7 working days</p>
                <p className='flex text-sm font-light '> <Heart /> <h3>Move to whishlist</h3></p>
                <p  className='flex text-sm font-light'> <Trash2 /> <h3>Remove</h3></p>
                </div>
            </div>
            <div className='flex flex-row space-x-11 items-center gap-x-28 '>
                <p>#90,000</p>
                <div>
                <span className='flex gap-8 border    py-1 px-2'><p>-</p>
                 <p>5</p> 
                 <p>+</p>
                 </span>
                </div>
                <p>#90,000</p>
            </div>
            
            
        </div>
        </Link>
        <hr className='mb-4 p-[0.5px] bg-gray-900'/>
        <div className='flex justify-between'>
            <div className='flex  mb-5 space-x-3'>
                <div  className='bg-gray-100 '><img src={Chairs} alt=""  className='w-[100px]'/>
                </div>
                <div className='py-3 space-y-3'> 
                <p className=''>Product Name - Color</p>
                <p className='text-sm font-light text-gray-500'>Estimated delivery within 7 working days</p>
                <p className='flex text-sm font-light '> <Heart /> <h3>Move to whishlist</h3></p>
                <p  className='flex text-sm font-light'> <Trash2 /> <h3>Remove</h3></p>
                </div>
            </div>
            <div className='flex flex-row space-x-11 items-center gap-x-28 '>
                <p>#90,000</p>
                <div>
                <span className='flex gap-8 border    py-1 px-2'><p>-</p>
                 <p>5</p> 
                 <p>+</p>
                 </span>
                </div>
                <p>#90,000</p>
            </div>
            
        </div>
        <hr className='mb-4 p-[0.5px] bg-gray-900'/>
        <div className='flex justify-between'>
            <div className='flex  mb-5 space-x-3'>
                <div  className='bg-gray-100 '><img src={Chairs} alt=""  className='w-[100px]'/>
                </div>
                <div className='py-3 space-y-3'> 
                <p className=''>Product Name - Color</p>
                <p className='text-sm font-light text-gray-500'>Estimated delivery within 7 working days</p>
                <p className='flex text-sm font-light '> <Heart /> <h3>Move to whishlist</h3></p>
                <p  className='flex text-sm font-light'> <Trash2 /> <h3>Remove</h3></p>
                </div>
            </div>
            <div className='flex flex-row space-x-11 items-center gap-x-28 '>
                <p>#90,000</p>
                <div>
                <span className='flex gap-8 border    py-1 px-2'><p>-</p>
                 <p>5</p> 
                 <p>+</p>
                 </span>
                </div>
                <p>#90,000</p>
            </div>
            
        </div>
        <hr className='mb-4 p-[0.5px] bg-gray-900'/>
        <div className='flex justify-between h-36 my-3'>



<div className='flex flex-col'>
<div className='flex flex-col space-y-3' >
        <p>Discount or gift voucher?</p>
        <div className='flex space-x-8'> 
        <Input type="email" placeholder="Email" className='w-full flex-1' />
        <Button className='bg-[#375D81] px-10' >REDEEM</Button>
        </div>
</div>
<div className='border  border-gray-900'></div>
</div>
 <div className='flex items-center justify-between'>
 <p>Subtotal</p>
 <div>
   <div className='flex flex-col'>
   <p  className='font-bold'># 180, 000</p>
   <p>(Excluding delivery fee)</p>

   </div>
    <Button className= "">  PROCEED TO CHECKOUT</Button>
 </div>

 </div>

<div>

    </div>
    </div>
    </div>
  )
}

export default CartHero