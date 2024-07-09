import React from 'react';
import { Link } from 'react-router-dom';


const NavSub = () => {
  return (
    <div  className='bg-[#1D130A82]  '>
        <div className=' justify-center container '>
           <Link className= 'pr-20' to="/product">Living Room</Link>
           <Link className= 'px-20'to="/product">Kitchen & Dining</Link>
           <Link className= 'px-20' to="/product">Bedroom</Link>
           <Link className= 'px-20' to="/product">Storage Furniture</Link>
           <Link className= 'px-30'to="/product">Home Office & Study</Link>
        </div>
    </div>
  )
}

export default NavSub