import React from "react";
import hero from "@/assets/Hero.png";
import { Homebutton } from "../Buttons/Homebtn";
const Hero = () => {
  return (
    <div className="relative ">
      <div >
        {" "}
        <img src={hero} alt="" className="h-[690px] " />
      </div>

      <div className="absolute top-[85px] bg-[#D9D9D9C9] py-5 px-10  ml-10 items-center ">
        <div className=" " >
          <h2>HomeNest Gallery (HNG)</h2>
          <h2>Redefining Furniture Shopping in <br/> Nigeria</h2> 
        </div>
        <Homebutton/>
      </div>
    </div>
  );
};

export default Hero;
