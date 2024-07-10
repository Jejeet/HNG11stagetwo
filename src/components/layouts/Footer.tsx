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
      <div className=' flex flex-col gap-y-5 sm:flex-row sm:justify-between '>
      <div className='flex flex-col gap-y-3 sm:w-1/3'>
        <h2 className='text-xl text-white'>Contact Us</h2>
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
      
      <div className='flex flex-col gap-y-5 sm:w-1/4  '>
        <h2 className='text-xl text-white'>Help & Support</h2>
        <div className='flex flex-col space-y-1 '>
           <a href="http://" className='text-gray-200 font-light'>Deliveries</a> 
           <a href='' className='text-gray-200 font-light'>Store Locator</a>
          <a href=""  className='text-gray-200 font-light'>Tracking your order</a>
          <a href='' className='text-gray-200 font-light'>Shipping</a>
          <a href='' className='text-gray-200 font-light'>Returns  & Refunds</a>
          <a href='' className='text-gray-200 font-light'>FAQ</a>
        </div>
      </div>

      <div className='flex flex-col gap-y-5 sm:w-1/4'>
      <h2 className='text-xl text-white'>Shop by category</h2>
           <div className='flex flex-col space-y-1'>
           <a href="http://" className='text-gray-200 font-light'>New in store</a>
           <a href='' className='text-gray-200 font-light'>Living Room</a>
            <a href=""  className='text-gray-200 font-light'>Kitchen </a>
            <a href='' className='text-gray-200 font-light'>Storage</a>
            <a href='' className='text-gray-200 font-light'>Clearance Deals</a>
           </div>
        
      </div>
      <div className="flex-1 flex flex-col sm:mt-0 mt-10">
        <h1 className='text-xl text-white'>Subscribe to our newsletter</h1>
        <div className='space-y-6'>
        <span className='flex items-center space-x-2 bg-white rounded px-2'>
          <Input className='border-none focus:border-non
           active:border-none outline-none
            focus:outline-none focus-visible:ring-0 
            focus-visible:ring-offset-0 rounded   focus:border-none text-sm' placeholder='Enter your email'/>
             <img src={arrowRight} alt="" className='w-4 h-4' /> 
          </span>
        <div className='flex items-center space-x-5'>
            <div> <img src={X} alt="" className='w-6 h-6' /> </div>
            <div> <img src={facebook} alt="" className='w-6 h-6' /></div>
            <div><img src={pinterest} alt="" className='w-6 h-6' /></div>
            <div><img src={instagram} alt="" className='w-6 h-6' /></div>
        </div>
        </div>
      </div>
      </div>
      {/* last  */}
      <div className='flex flex-col sm:flex-row sm:justify-between text-white mt-10'>
        <div className='flex gap-10'>
          <p className='text-gray-500 font-light text-sm'>Terms & conditons</p>
        <p className='text-gray-500 font-light text-sm'>cookies & Privacy Policy</p>
        </div>
        <div>
          
          <p className='text-gray-500 font-light text-sm'>&copy; 2024 HNG. All rights reserved</p>
        </div>
      </div>
     </div>
    </footer>
  )
}

export default Footer