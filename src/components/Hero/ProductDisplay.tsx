import { Diplay } from "@/lib/product";
import React from "react";
import SimpleCard  from "../productcards/SimpleCard";

const ProductDisplay = () => {
  return (
    <div className="flex flex-row ">
     {Diplay.map(dis=>(<SimpleCard title={dis.title} image={dis.image} id={dis.id}/>))}
    </div>
  );
};

export default ProductDisplay;


