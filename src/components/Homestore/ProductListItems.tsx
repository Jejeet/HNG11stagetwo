import { products } from '@/lib/product'
import React from 'react'
import { Link } from 'react-router-dom'

import { ProductListcard } from '../productcards/productListcard'

const Clearpage = () => {
  return (
    <div className='text-center bg-[#E1E6FA] '>
     <div className="container">
     
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-15 py-7'>
                {products.map((products)=>{
                   
                        return <Link to={"/cart"}><ProductListcard {...products}/></Link>
                    
                })}
                
            </div>

     </div>
    </div>
  )
}

export default Clearpage