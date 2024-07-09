
import ProductDisplay from '@/components/Hero/ProductDisplay'
import ProductHero from '@/components/Hero/ProductHero'
import Sort from '@/components/Hero/Sort'
import ProductListItems from '@/components/Homestore/ProductListItems'
import React from 'react'

const ProductList = () => {
  return (
    <div>
       <ProductHero />
       <ProductDisplay/>
       <Sort/>
       <ProductListItems/>
    </div>
  )
}

export default ProductList