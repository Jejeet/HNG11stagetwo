import { ShoppingBag } from 'lucide-react'
import React from 'react'

function ProductShoppingBag({className}:{className?:string}) {
  return (
    <div className={` flex items-center justify-center size-10 ${className ? className :'bg-gray-700'} rounded-full p-1`}>
    <ShoppingBag  className="stroke-gray-50" />
    </div>
 
  )
}

export default ProductShoppingBag