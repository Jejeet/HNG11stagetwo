import React from 'react'

import { ProductCarousel } from '../productcards/ProductCarousel'
import { SafeStool } from '@/lib/product'

const Homestore = () => {
    
  return (
    <div className='flex flex-col items-center space-y-8 my-20 w-[75%] mx-auto text-center'>
        <h2 className='pb-4 items-center text-3xl'>NEW IN STORE</h2>
        <ProductCarousel products={SafeStool}
        />
    </div>
  )
}

export default Homestore