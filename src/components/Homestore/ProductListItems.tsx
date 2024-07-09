import { products } from '@/lib/product'
import React from 'react'
import { Link } from 'react-router-dom'

import { ProductListcard } from '../productcards/productListcard'

const Clearpage = () => {
  return (
    <div className='text-center bg-[#E1E6FA]  '>
        <h2 className=' pb-4 items-center text-3xl'>CLEARANCE DEALS
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-10 py-7 '>
                {products.map((products)=>{
                   
                        return <Link to={"/cart"}><ProductListcard {...products}/></Link>
                    
                })}
                
            </div>
</h2>
    </div>
  )
}

export default Clearpage