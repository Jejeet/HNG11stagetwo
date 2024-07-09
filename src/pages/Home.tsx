// import { NewProduct } from '@/components/productcards/NewProduct'

// import { ProductInstore } from '@/components/productcards/ProductInstore'
// import { ProductListcard } from '@/components/productcards/productListcard'
// import { getImageUrl } from '@/lib/getImage'
import Clearpage from '@/components/Hero/Clearpage'
import Hero from '@/components/Hero/Hero'
import Homestore from '@/components/Homestore/Homestore'
import Inspiration from '@/components/Homestore/Inspiration'
import React from 'react'




const Home = () => {
  
  return (
    
    <div>  
        <Hero />
        <Clearpage />
        <Homestore />
        <Inspiration />
        {/* <NewProduct image={getImageUrl("chairs")}  title='hello world' id={crypto.randomUUID()} sellingPrice={1000} originalPrice={2500}/>
        <ProductInstore image={getImageUrl("chairs")}  title='hello world' id={crypto.randomUUID()} sellingPrice={1000}/>
        <ProductListcard image={getImageUrl("chairs")}  title='hello world' id={crypto.randomUUID()} sellingPrice={1000} originalPrice={2500}/> */}
    </div>
  )
}

export default Home 