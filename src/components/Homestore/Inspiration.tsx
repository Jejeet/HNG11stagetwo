import React from "react";
import SittingRoom from "@/assets/inspiration1.png"
import Kitchen from "@/assets/inspiration2.png"
const Inspiration = () => {
  return (
    <div className=" flex flex-col items-center justify-center bg-[#E1E6FA] pb-10">
      <h2 className="pb-8 pt-4 text-xl">INSPIRATIONAL IDEAS</h2>
      <div className="flex flex-col  w-[1364px] px-20" >
        <div className="flex flex-row mb-4">
          <div className="w-1/2">
            <img src={SittingRoom} alt=""  className="w-full" />
          </div>
          <div className=" w-1/2 p-16 flex flex-col space-y-8 items-center justify-start bg-gray-50">
            <h3 className="py-8">Living Room</h3>
            <p>
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

        <div className="flex flex-row  "  >
          <div className=" w-1/2 flex flex-col space-y-8  items-center justify-start bg-gray-50 p-16 ">
            <h3 className="py-8">Living Room</h3>
            <p>
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
          <div className=" w-1/2">
            <img src={Kitchen} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
