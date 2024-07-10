import * as React from "react";
import HotIcon from "@/assets/hotIcon.svg";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Heart } from "lucide-react";
import ProductShoppingBag from "./ProductShoppingBag";
import ProductColorBadge from "./ProductColorBadge";
import ProductPricing from "./ProductPricing";

type NewProductType = {
  title: string;
  image?: string;
  id: string | number;
  sellingPrice: number;
  originalPrice: number;
};
export function NewProduct({
  title,
  image = "",
  id,
  sellingPrice,
  originalPrice,
}: NewProductType) {
  return (
    <Card className=" border-none relative" key={id}>
      <CardHeader className="bg-[#F5F5F3] p-10">
        <img src={image} className=" object-cover mt-3" />
      </CardHeader>
      <CardContent>
        <img
          src={HotIcon}
          alt={title}
          className="absolute top-[22px] left-[1rem] size-10"
        />
        <Heart className="absolute top-[28px] right-[1rem] size-8" />
      </CardContent>
      <CardFooter className="bg-white flex flex-col space-y-5 py-4">
        <div className="flex items-center justify-between gap-x-5 w-full">
          <h2 className=" text-sm">{title}</h2>
          <div className="flex space-x-2 items-center ">
            <ProductColorBadge color="bg-[#4C677E]" />
            <ProductColorBadge color="bg-[#AFC948]"   />
            <ProductColorBadge color="bg-[#AE4444]" />
            <ProductColorBadge color="bg-[#357DCF]" />
            <ProductColorBadge color="bg-[#D89826]" />
            <span className="text-[12px] font-extralight italic">+3</span>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <ProductPricing
            sellingPrice={sellingPrice}
            originalPrice={originalPrice}
          />

          <ProductShoppingBag className=" bg-[#707070;]" />
        </div>
      </CardFooter>
    </Card>
  );
}
