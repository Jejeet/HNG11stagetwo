import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ProductInstore } from "./ProductInstore"
import { NewProductType } from "@/lib/product"

 
export function ProductCarousel({products}:{products:NewProductType[]}) {
  return (
    <div className="container">
      <Carousel
      opts={{
        align: "center",
        
      }}
      
    >
      <CarouselContent className="items-center justify-center">
        {products.map(product=> (
          <CarouselItem key={product.id} className=" w-full lg:basis-1/3 items-center justify-center  ">
              <ProductInstore 
              id={product.id} 
              image={product.image} 
              sellingPrice={product.sellingPrice || 90} 
              title={product.title}/>
          
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}