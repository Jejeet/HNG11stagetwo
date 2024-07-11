import { HomeDeal } from '@/lib/product'
import React from 'react'
import { Link } from 'react-router-dom'
import { NewProduct } from '../productcards/NewProduct'

const Clearpage = () => {
  return (
    <div className='text-center bg-[#C4D7ED]'>
       <div className="container">
       <h2 className='items-center text-3xl py-8'>CLEARANCE DEALS</h2>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:mx-10 py-7 '>
                {HomeDeal.slice(0, 4).map((HomeDeal)=>{
                   
                        return <Link to={"/product"}><NewProduct {...HomeDeal}/></Link>
                    
                })}
                
            </div>

       </div>
    </div>
  )
}

export default Clearpage


