import { products } from '@/lib/product'
import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

import { ProductListcard } from '../productcards/productListcard'

const Clearpage = () => {
  return (
    <div className='text-center bg-[#E1E6FA] mt-20 pb-32   '>
        {/* <h2 className=' pb-4 py-10 items-center text-3xl'>CLEARANCE DEALS */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-10 py-7 '>
                {products.map((products)=>{
                   
                        return <Link to={"/cart"}><ProductListcard {...products}/></Link>

                        
                    
                })}
                
            </div>
            <div className='flex gap-10 items-center justify-center'>
            <div><p className='text-[#70707082] text-sm'>1-20 of 900 product</p></div>
            <div className='flex gap-2 text-[#70707082]' ><p>1</p>
            <p>2</p>
            <p>3</p>
            <ChevronRight />
            </div>
        </div>

    </div>
  )
}

export default Clearpage