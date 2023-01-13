import { FC } from "react";
import Image from "next/image";
import img from "../Banner/cat.png";


const Banner: FC = () => {
  return (
    <div className="bg-[#F3EFE0] h-[1000px] flex items-center justify-center">
      <div>
        <h1 className="text-[#FB2576] text-7xl font-Volkhov font-bold">
          The Next <br></br> Digital NFT Marketplace
        </h1>
        <p className="text-[#6D67E4] text-xl font-Poppins font-bold py-5">
          Introducing our newest marketplace for unique and one-of-a-kind NFTs!
          <br /> Explore a diverse collection of digital artwork, collectibles,
          and more,
          <br />
          all verified on the blockchain for authenticity.
        </p>
        <button className="bg-[#5F9DF7] text-2xl text-[#fff] font-Poppins font-bold px-11 py-5 border border-solid rounded-[50px]">
          Explore
        </button>

        <div className=" flex mt-[150px]">
          <div className="mr-[20px]">
            <h3 className="text-[#C58940] font-Poppins font-bold text-xl">
              1000
            </h3>
            <h3 className="text-[#C58940] font-Poppins font-bold text-xl">
              Collectibles
            </h3>
          </div>
          <div>
            <h3 className="text-[#C58940] font-Poppins font-bold text-xl">
              1000
            </h3>
            <h3 className="text-[#C58940] font-Poppins font-bold text-xl">
              Artist
            </h3>
          </div>
        </div>
      </div>
      <div>
        <Image src={img} width={700} height={700} alt="" unoptimized={true} />
      </div>

    </div>
  );
};

export default Banner;
