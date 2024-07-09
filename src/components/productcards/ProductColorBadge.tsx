import React from 'react'
import { Badge } from '../ui/badge'

function ProductColorBadge({color="bg-red-300"}) {
  return (
    <>
    <Badge className={`${color} size-2 px-0 py-0  rounded-full`}></Badge>
    </>
    
  )
}

export default ProductColorBadge