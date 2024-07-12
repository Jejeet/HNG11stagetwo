import { Heart, MoveLeft, Trash2 } from 'lucide-react'
import React from 'react'
import Chairs from "@/assets/chairs.png"
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

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

        <Link to={"/check"}>
        <div className='flex flex-col sm:flex-row justify-between mb-5 space-y-4 sm:space-y-0 sm:space-x-3'>
            <div className='flex flex-col sm:flex-row space-x-0 sm:space-x-3'>
                <div  className='bg-gray-100 h-full w-full sm:w-auto sm:flex-none '><img src={Chairs} alt=""  className='w-full h-full'/>
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
                <span className='flex gap-8 border    py-1 px-2'>
                    <p>-</p>
                 <p >5</p> 
                 <p >+</p>
                 </span>
                </div>
                <p className=' md:block hidden'>#90,000</p>
            </div>
            
        </div>
        </Link>
        <hr className='mb-4 p-[0.5px] bg-gray-900'/>
        <Link to={"/check"}>
        <div className='flex flex-col sm:flex-row justify-between mb-5 space-y-4 sm:space-y-0 sm:space-x-3  '>
            <div className='flex flex-col sm:flex-row space-x-0 sm:space-x-3'>
                <div  className='bg-gray-100 h-full w-full sm:w-auto sm:flex-none '><img src={Chairs} alt=""  className='w-full h-full' />
                </div>
                <div className='py-6 space-y-14 '> 
                <p className=''>Product Name - Color</p>
                <p className='text-sm font-light text-gray-500'>Estimated delivery within 7 working days</p>
                <p className='flex text-sm font-light '> <Heart /> <h3>Move to whishlist</h3></p>
                <p  className='flex text-sm font-light'> <Trash2 /> <h3>Remove</h3></p>
                </div>
            </div>
            <div className='flex flex-row space-x-11 items-center gap-x-28 '>
                <p>#90,000</p>
                <div>
                <span className='flex gap-8 border    py-1 px-2'>
                    <p >-</p>
                 <p >5</p> 
                 <p >+</p>
                 </span>
                </div>
                <p className=' md:block hidden'>#90,000</p>
            </div>
            
        </div>
        </Link>
        <hr className='mb-4 p-[0.5px] bg-gray-900'/>
       

{/* <div className="overflow-x-auto">
  <table className="min-w-full divide-y divide-gray-200 bg-[#ABC8E2] mt-5">
    <thead>
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Products</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Unit Price</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Quantity</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Total</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {[...Array(3)].map((_, index) => (
        <tr key={index}>
          <td className="px-6 py-4 whitespace-nowrap flex flex-col sm:flex-row">
            <div className="bg-gray-100 h-full w-full sm:w-auto sm:flex-none"><img src={Chairs} alt="" className="w-full h-full" /></div>
            <div className="py-6 space-y-2 sm:pl-4">
              <p className="">Product Name - Color</p>
              <p className="text-sm font-light text-gray-500">Estimated delivery within 7 working days</p>
              <p className="flex text-sm font-light"><Heart /><span className="pl-2">Move to wishlist</span></p>
              <p className="flex text-sm font-light"><Trash2 /><span className="pl-2">Remove</span></p>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">#90,000</td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex gap-2 justify-center items-center border px-2 py-1">
              <button className="px-1">-</button>
              <p>5</p>
              <button className="px-1">+</button>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">#90,000</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
<hr className="mb-4 p-[0.5px] bg-gray-900" /> */}


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