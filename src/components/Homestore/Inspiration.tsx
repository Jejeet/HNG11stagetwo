import React from "react";
import SittingRoom from "@/assets/inspiration1.png"
import Kitchen from "@/assets/inspiration2.png"
const Inspiration = () => {
  return (
    <div className=" bg-[#E1E6FA]">
      <div className="container">
      <div className=" flex flex-col items-center justify-center  pb-10">
      <h2 className="pb-8 pt-4 text-xl">INSPIRATIONAL IDEAS</h2>
      <div className="flex flex-col w-full" >
        <div className="flex flex-col lg:flex-row mb-4">
          <div className=" w-full lg:w-1/2">
            <img src={SittingRoom} alt=""  className="w-full" />
          </div>
          <div className=" w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col space-y-4 sm:space-y-8 items-center justify-start bg-gray-50">
            <h3 className="py-4 sm:py-8 text-lg sm:text-xl">Living Room</h3>
            <p className="text-sm sm:text-base">
              Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl,
              consectetur et luctus et, porta ut dolor. Curabitur ultricies
              ultrices nulla. Morbi blandit nec est vitae dictum. Etiam vel
              consectetur diam. Maecenas vitae egestas dolor. Fusce tempor magna
              at tortor aliquet finibus. Sed eu nunc sit amet elit euismod
              faucibus. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Duis gravida eget neque
              vel vulputate.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse  lg:flex-row "  >
          <div className=" w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col space-y-4 sm:space-y-8 items-center justify-start bg-gray-50 ">
            <h3 className="py-4 sm:py-8 text-lg sm:text-xl">Kitchen</h3>
            <p  className="text-sm sm:text-base">
              Fusce at nisi eget dolor rhoncus facilisis. Mauris ante nisl,
              consectetur et luctus et, porta ut dolor. Curabitur ultricies
              ultrices nulla. Morbi blandit nec est vitae dictum. Etiam vel
              consectetur diam. Maecenas vitae egestas dolor. Fusce tempor magna
              at tortor aliquet finibus. Sed eu nunc sit amet elit euismod
              faucibus. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Duis gravida eget neque
              vel vulputate.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <img src={Kitchen} alt="" className="w-full"/>
          </div>
        </div>
      </div>
    </div>
      </div>
     
    </div>
  );
};

export default Inspiration;
