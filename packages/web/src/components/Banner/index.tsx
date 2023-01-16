import { FC } from "react";
import Image from "next/image";
import img from "./cat.png";


const Banner: FC = () => {
  return (
  <div className="bg-[#F3EFE0]">
    <div className="min-h-96 px-4 pt-8">
      <div className="flex items-center max-w-7xl m-auto">
        <div>
            <h1 className="text-[#FB2576] text-7xl font-Volkhov font-bold">
              The Next <br></br> Digital NFT Marketplace
            </h1>
            <p className="text-[#6D67E4] text-xl font-Poppins font-medium py-5">
              Introducing our newest marketplace for unique and one-of-a-kind NFTs!
              <br /> Explore a diverse collection of digital artwork, collectibles,
              and more,
              <br />
              all verified on the blockchain for authenticity.
            </p>
            <button className="bg-[#5F9DF7] text-2xl text-white font-Poppins font-bold px-11 py-5 rounded-full">
              <a href="">Explore</a>
            </button>

          </div>
          <div className="hidden md:block">
            <Image src={img} width={700} height={700} alt="" unoptimized={true} />
          </div>
        </div>
      </div>
      <div className="flex max-w-7xl m-auto gap-4 px-4 mt-4">
        <div>
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
  );
};

export default Banner;
