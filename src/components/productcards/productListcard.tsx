import * as React from "react"
import newBadge from "@/assets/newbadge.svg"
import { Star } from "lucide-react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Heart } from "lucide-react"
import ProductShoppingBag from "./ProductShoppingBag"
import ProductColorBadge from "./ProductColorBadge"
import ProductPricing from "./ProductPricing"
type ProductListcardType = {title:string, image?:string, id:string|number, sellingPrice:number, originalPrice:number}
export function ProductListcard({title, image="https://picsum.photos/200/300", id, sellingPrice, originalPrice}:ProductListcardType) {
  return (
    <Card className="w-12/4 border-none relative  " key={id}>
      <CardHeader className="bg-[#F5F5F3] p-10">
      <img src={image} className=" h-[210px] object-cover mt-3"/>
      </CardHeader>
      <CardContent className="p-0 pt-0"> 
         <Heart className=" stroke-[#183152]  absolute top-[22px] left-[1rem]  size-8"/>
         <img src={newBadge} alt={title}  className="absolute top-[2px] right-[1px]  size-18" />
      </CardContent>
      <CardFooter className="bg-white flex flex-col space-y-5 py-4">
        <div className="flex items-center justify-between w-full" >
             <span className="flex "><Star className=" fill-[#183152]" /> <Star className=" fill-[#183152]"/> <Star className=" fill-[#183152]"/><Star  className=" fill-[#183152]"/> <Star className=" fill-[#183152]"/></span> 
             <span>
             <ProductPricing sellingPrice={sellingPrice} originalPrice={originalPrice}/></span>
             </div>

       <div className=" flex items-center justify-between ">
        <div className=" text-start space-y-2">
        <h2 className="text-base">{title}</h2>
        <p className="text-[10px] font-light leading-tight text-gray-600">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
        </div>
        <div><ProductShoppingBag className="bg-[#183152]"/></div>
       </div>
      
       <div className="flex space-x-2 items-center w-full ">
            <ProductColorBadge color="bg-gray-900"/>
            <ProductColorBadge color="bg-gray-800"/>
            <ProductColorBadge color="border border-gray-900 bg-transparent"/>
            <ProductColorBadge color="border border-gray-900 bg-transparent"/>
            <ProductColorBadge color="border border-gray-900 bg-transparent"/>
            <span className="text-[12px] font-extralight italic">+5</span>
        </div>
      </CardFooter>
    </Card>
  )
}
