import { MenuIcon, Search } from 'lucide-react'
import React from 'react'
import { Input } from '../ui/input'
import User from "../../assets/user.png"
import cart from "../../assets/cartbag.png"
import Logo from "../../assets/Logo.svg"
import { Link } from 'react-router-dom'
import NavSub from './NavSub'


const NavBar = () => {

  
  return (
    <>
    <div className='bg-primary'>

      <div className='flex justify-between items-center py-4 container h-[75px]'>
        <div> 
          <Link to={"/"}>
            <img src={Logo} alt="" />
            </Link>
          </div> 
      <div className='hidden lg:flex items-center justify-between gap-x-36'>
      <div className='bg-white   border-tertiary pr-10 flex items-center  rounded-[14px]'>
            <Input className=' py-3 px-2 border-none focus:border-none active:border-none outline-none rounded-[14px] w-[400px] focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0' placeholder='Search' />
            <Search/>
        </div>
        <div className='flex gap-10 mx-10'>
            <div><h2 className='text-white'>CONTACT US</h2></div>
            <div><img src={User} alt="" /></div>
            <div><img src={cart} alt="" /></div>

        </div>
      </div>
      <div className='lg:hidden' >
        <MenuIcon/>
      </div>
    </div>

   
    </div>
    <NavSub/>
    </>
  )
}

export default NavBar