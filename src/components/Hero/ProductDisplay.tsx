import { Diplay } from "@/lib/product";
import React from "react";
import SimpleCard  from "../productcards/SimpleCard";

const ProductDisplay = () => {
  return (
    <div className="hidden md:flex flex-row container ">
     {Diplay.map(dis=>(<SimpleCard title={dis.title} image={dis.image} id={dis.id} key={dis.id}/>))}
    </div>
  );
};

export default ProductDisplay;


