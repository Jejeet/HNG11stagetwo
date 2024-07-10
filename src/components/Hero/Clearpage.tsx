import { HomeDeal } from '@/lib/product'
import React from 'react'
import { Link } from 'react-router-dom'
import { NewProduct } from '../productcards/NewProduct'

const Clearpage = () => {
  return (
    <div className='text-center bg-[#C4D7ED] py-10'>
        <h2 className=' pb-4 items-center text-3xl'>CLEARANCE DEALS
            <div className='flex gap-5 mx-10 py-7'>
                {HomeDeal.slice(0, 4).map((HomeDeal)=>{
                   
                        return <Link to={"/product"}><NewProduct {...HomeDeal}/></Link>
                    
                })}
                
            </div>
</h2>
    </div>
  )
}

export default Clearpage