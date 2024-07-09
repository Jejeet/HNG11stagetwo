import React from 'react'
import { Link } from 'react-router-dom'

function HomeNav() {
  return (
    <div className='bg-[#C4D7ED] '>
 <div className='flex items-center justify-end space-x-7   container  '>
            <Link to="/">show room</Link>
            <Link to="/product">about</Link>
            <Link to="/product">Inspiration</Link>
            <Link to="/product">Help</Link>
    </div>
    </div>
   
  )
}

export default HomeNav