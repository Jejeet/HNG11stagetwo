// import { products } from '@/lib/product'
// import { title } from 'process'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import { number, string } from 'zod'

import { ProductListcard } from '../productcards/productListcard'
// const URL = `/api/products?organization_id=7c9910e9776b4b77848011cf9d988ca3&reverse_sort=false&page=1&size=20&Appid=${import.meta.env.VITE_APP_ID}&Apikey=${import.meta.env.VITE_API_KEY}`

 interface Product{
  id: number|string
  name: string
  description:string
  price: number
  available_quantity:number
  photos:object[]
  sellingPrice: number
  originalPrice: number
 }
 

const Clearpage = () => {
  const [product, setProduct] = useState<Product[]>([])

  const fetchProduct = async (pageNumber:number)=>{
    const URL = `/api/products?organization_id=7c9910e9776b4b77848011cf9d988ca3&reverse_sort=false&page=${pageNumber}&size=12&Appid=${import.meta.env.VITE_APP_ID}&Apikey=${import.meta.env.VITE_API_KEY}`
    const response = await fetch(URL)
    const data = await response.json()
    setProduct(data.items)
    console.log(data.items)
    return data
  }

  useEffect(()=>{
    fetchProduct(1)
  },[])
  

  const handleClick=(pageNumber:number)=>{
    fetchProduct(pageNumber)
    }

  return (
    <div className='text-center bg-[#E1E6FA] '>
     <div className="container">
     
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-15 py-7'>
                {product.map((product,index)=>{
                   
                        return <Link key={index} to={"/cart"}><ProductListcard {...product}/></Link>
                    
                })}
                
            </div>
            <div className='space-x-2 pb-6 '>
              <button onClick={()=>handleClick(1)} className="border border-1 border-black px-2">1</button>
              <button onClick={()=>handleClick(2)}className="border border-1 border-black px-2">2</button>
              <button onClick={()=>handleClick(3)} className="border border-1 border-black px-2">3</button>
            </div>

     </div>
    </div>
  )
}

export default Clearpage