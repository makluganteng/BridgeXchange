import { FC } from "react";
import Banner from "../Components/Banner/Banner";
import Thumbnail from "../Components/Thumbnail/Thumbnail";

import Image from "next/image";
import img from "../Components/Thumbnail/d6.png";

const Buy: FC = () => {
  return (
    <div className="bg-[#F3EFE0] h-[960px] flex items-center justify-center">
      <div className=" w-[1300px] h-[700px] border-solid border border-8 rounded-[50px]
      border-[#E8C4C4] flex items-center justify-around ">
        <div className="pl-20">
          <Image
            src={img}
            width={500}
            height={500}
            alt=""
            unoptimized={true}
            className="rounded-lg border border-solid border-8"
          />
        </div>
        <div className="my-2 pr-32">
          <h1 className="my-2 py-4 font-Poppins font-bold text-6xl text-[#86C8BC]"> Name </h1>
          <h1 className="my-2 py-4 font-Poppins font-bold text-5xl text-[#FEA1BF]"> Price eth</h1>

          <button className="my-2 py-4 font-Poppins font-bold text-4xl
          border border-solid px-[100px] rounded-full bg-[#C780FA] text-[#ECE8DD]"> Buy with ETH</button>
          <br />
          <button className="my-2 py-4 font-Poppins font-bold text-4xl
          border border-solid px-[22px] rounded-full bg-[#C58940] text-[#ECE8DD]"> Buy with Panda Bank</button>
        </div>
      </div>
    </div>
  );
};

export default Buy;
