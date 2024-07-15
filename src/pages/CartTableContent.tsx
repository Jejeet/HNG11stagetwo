import React from 'react'
import { Link } from 'react-router-dom'
import Chairs from "@/assets/chairs.png"
import { Heart, Trash2 } from 'lucide-react'

const CartTableContent = () => {
  return (
    <div>
           <Link to="/check">
            <div className='flex flex-col sm:flex-row justify-between mb-5 space-y-4 sm:space-y-0 sm:space-x-3 '> 
            <div className='flex flex-col sm:flex-row space-x-0 sm:space-x-3'>
                <div className='bg-gray-100 h-full w-full sm:w-auto sm:flex-none'><img src={Chairs} alt=""  className='w-full h-full'/>
                </div>
                <div className='py-6 space-y-14'> 
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
                <p className=' md:block hidden'>#90,000</p>
            </div>
            
            
        </div>
        </Link>
        <hr className='mb-4 p-[0.5px] bg-gray-900'/>
    </div>
  )
}

export default CartTableContent