import React from 'react'
import { MapPin,Phone, Mail } from 'lucide-react'

import facebook from "../../assets/Facebook.svg"
import instagram from "../../assets/instagram.svg"
import X from "../../assets/Twitter.svg"
import pinterest from "../../assets/Pinterest.svg"

import { Input } from '../ui/input'
import arrowRight from "../../assets/arrowRight.svg"

const Footer = () => {
  return (
    <footer className='bg-primary'>
     <div className="container py-16">
      <div className=' flex  justify-center text-white'>
      <div className='flex flex-col gap-y-5 basis-[30%]'>
        <h2 className='text-xl'>Contact Us</h2>
       <div className='space-y-3'>
       <div className='flex gap-3 items-start'>
          <MapPin   className="size-7"/>
          <h1  className='text-gray-200 font-light'>19, Adekunle Adebayo Street, <br/> Victoria Island,
             Lagos State, Nigeria.</h1>
            </div>
        <div className='flex gap-4 items-center'> <Phone className="size-6" /><h1  className='text-gray-200 font-light'>+(234) 905 632 7145 </h1> </div>
        <div className='flex gap-4 items-center'> <Mail className="size-6"/> <h1 className='text-gray-200 font-light'>Samkingwebdev@gmail.com</h1> </div>
       </div>
      </div>
      
      <div className='basis-[25%]  flex flex-col gap-y-10  '>
        <h2 className='text-xl'>Help & Support</h2>
        <div className='flex flex-col space-y-1 '>
           <a href="http://" className='text-gray-200 font-light'>Deliveries</a> 
           <a href='' className='text-gray-200 font-light'>Store Locator</a>
          <a href=""  className='text-gray-200 font-light'>Tracking your order</a>
          <a href='' className='text-gray-200 font-light'>Shipping</a>
          <a href='' className='text-gray-200 font-light'>Returns  & Refunds</a>
          <a href='' className='text-gray-200 font-light'>FAQ</a>
        </div>
      </div>

      <div className='basis-[25%] flex flex-col gap-y-5'>
      <h2 className='text-xl'>Shop by category</h2>
           <div className='flex flex-col space-y-1'>
           <a href="http://" className='text-gray-200 font-light'>New in store</a>
           <a href='' className='text-gray-200 font-light'>Living Room</a>
            <a href=""  className='text-gray-200 font-light'>Kitchen </a>
            <a href='' className='text-gray-200 font-light'>Storage</a>
            <a href='' className='text-gray-200 font-light'>Clearance Deals</a>
           </div>
        
      </div>
      <div className="flex-3 space-y-4 self-center">
        <h1 className='text-xl'>Subscribe to our newsletter</h1>
        <div className='space-y-6'>
        <span className='flex items-center space bg-white rounded px-2'>
          <Input className='border-none focus:border-non
           active:border-none outline-none
            focus:outline-none focus-visible:ring-0 
            focus-visible:ring-offset-0 rounded '/> <img src={arrowRight} alt="" /> 
          </span>
        <div className='flex gap-5'>
            <div> <img src={X} alt="" /> </div>
            <div> <img src={facebook} alt="" /></div>
            <div><img src={pinterest} alt="" /></div>
            <div><img src={instagram} alt="" /></div>
        </div>
        </div>
      </div>
      </div>
      {/* last  */}
      <div className='flex text-white justify-between  mt-20'>
        <div className='flex gap-10'>
          <p className='text-gray-500 font-light text-sm'>Terms & conditons</p>
        <p className='text-gray-500 font-light text-sm'>cookies & Privacy Policy</p>
        </div>
        <div>
          <p></p>
          <p className='text-gray-500 font-light text-sm'>&copy; 2024 HNG. All rights reserved</p>
        </div>
      </div>
     </div>
    </footer>
  )
}

export default Footer