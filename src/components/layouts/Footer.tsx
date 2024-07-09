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
     <div className="container pt-8">
      <div className=' flex  justify-center text-white'>
      <div className='flex flex-col gap-y-5 basis-[25%]'>
        <h2 className=''>Contact Us</h2>
       <div className='space-y-3'>
       <div className='flex gap-3 items-start'>
          <MapPin   className="size-7"/>
          <h1 >19, Adekunle Adebayo Street, Victoria Island,
             Lagos State, Nigeria.</h1>
            </div>
        <div className='flex gap-3 items-center'> <Phone className="size-4" /><h1 >+(234) 905 632 7145 </h1> </div>
        <div className='flex gap-3 items-center'> <Mail className="size-4"/> <h1 >Samkingwebdev@gmail.com</h1> </div>
       </div>
      </div>
      
      <div className='basis-[25%]  flex flex-col gap-y-5  '>
        <h2 className=''>Help & Support</h2>
        <div className='flex flex-col space-y-1 '>
           <a href="http://">Deliveries</a> 
           <a href=''>Store Locator</a>
          <a href="" >Tracking your order</a>
          <a href=''>Shipping</a>
          <a href=''>Returns  & Refunds</a>
          <a href=''>FAQ</a>
        </div>
      </div>

      <div className='basis-[25%] flex flex-col gap-y-5'>
      <h2 className=''>Shop by category</h2>
           <div className='flex flex-col space-y-1'>
           <a href="http://">New in store</a>
           <a href=''>Living Room</a>
            <a href="" >Kitchen </a>
            <a href=''>Storage</a>
            <a href=''>Clearance Deals</a>
           </div>
        
      </div>
      <div className="flex-3">
        <h1>Subscribe to our newsletter</h1>
        <span className='flex items-center bg-white rounded px-2'><Input className='border-none focus:border-none active:border-none outline-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded '/> <img src={arrowRight} alt="" /> </span>
        <div className='flex gap-5'>
            <div> <img src={X} alt="" /> </div>
            <div> <img src={facebook} alt="" /></div>
            <div><img src={pinterest} alt="" /></div>
            <div><img src={instagram} alt="" /></div>
        </div>
      </div>
      </div>
      {/* last  */}
      <div className='flex text-white justify-between '>
        <div className='flex gap-10'>
          <p>Terms & conditons</p>
        <p>cookies & Privacy Policy</p>
        </div>
        <div>
          <p></p>
          <p>2024 HNG. All rights reserved</p>
        </div>
      </div>
     </div>
    </footer>
  )
}

export default Footer