import React from 'react'

import {
    Card,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card"

  type SimpleCardType = {
    title: string;
    image?: string;
    id: string | number;
   
   
  
  };
export default function SimpleCard({title,image,id }:SimpleCardType) {
  return (
    <Card className="w-[60%] border-none shadow-none relative bg-transparent " key={id}>
    <CardHeader className="bg-transaparent  ">
    <img src={image} className="w-[159px] h-[143px] object-cover mt-3"  />
    </CardHeader>
    
    <CardFooter className="bg-transparent flex flex-col space-y-5 py-4">
      <p>{title}</p>
    </CardFooter>
  </Card>
  )
}

