import * as React from "react"
import newBadge from "@/assets/newbadge.svg"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Heart } from "lucide-react"
import ProductColorBadge from "./ProductColorBadge"
import ProductPricing from "./ProductPricing"
type productInstoreType = {title:string, image?:string, id:string|number, sellingPrice:number}
export function ProductInstore({title, image="https://picsum.photos/200/300", id, sellingPrice}:productInstoreType) {
  return (
    <Card className=" border-none relative " key={id} >
      <CardHeader className="bg-[#F5F5F3] p-10">
      <img src={image} className= "object-cover mt-3"/>
      </CardHeader>
      <CardContent className="p-0 pt-0 "> 
         <Heart className=" stroke-gray-500  absolute top-[22px] left-[1rem]  size-8"/>
         <img src={newBadge} alt={title}  className="absolute top-[2px] right-[1px]  size-18" />
      </CardContent>
      <CardFooter className="bg-[#ABC8E2] flex flex-col gap-y-2 py-4">
       <div className="flex items-center justify-between gap-x-5 w-full">
        <h2 className="text-base">{title}</h2>
        <ProductPricing sellingPrice={sellingPrice}/>
       </div>
      
       <div className="flex space-x-2 items-center justify-start w-full ">
            <ProductColorBadge color="bg-green-300"/>
            <ProductColorBadge color="bg-blue-300"/>
            <span className="text-[12px] font-extralight italic">+3</span>
        
       </div>
      </CardFooter>
    </Card>
  )
}
