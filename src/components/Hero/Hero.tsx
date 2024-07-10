import React from "react";
import hero from "@/assets/Hero.png";
import { Homebutton } from "../Buttons/Homebtn";
const Hero = () => {
  return (
    <div className="relative bg-[url(@/assets/Hero.png)] w-full lg:h-[690px] ">
   <div className="container">
   <div className="absolute  flex flex-col  items-center justify-center top-20 sm:top-24 md:top-[85px] bg-[#D9D9D9C9] p-10 sm:px-10    ">
        <div className=" " >
          <h2 className="text-lg sm:text-2xl lg:text-3xl">HomeNest Gallery (HNG)</h2>
          <h2 className="text-sm sm:text-lg lg:text-xl mt-2">Redefining Furniture Shopping in <br/> Nigeria</h2> 
        </div>
        <div className="mt-4">
        <Homebutton/>
        </div>
   </div>
      
      </div>
    </div>
  );
};

export default Hero;
