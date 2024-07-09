import React from 'react'

function ProductPricing({originalPrice, sellingPrice}:{originalPrice?:number, sellingPrice:number}) {
  return (
    <div className=" flex items-center space-x-2">
        {originalPrice && <span className="text-red-500 line-through font-medium text-base">${originalPrice}</span>}
        <span className={`${originalPrice ? "text-gray-900" :'text-red-500'} font-bold text-base`}>${sellingPrice}</span>
    </div>
  )
}

export default ProductPricing