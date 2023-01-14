import { FC } from "react";
import picture from '../Explore/explore.png';
import Image from "next/image";

const Explore: FC = () => {
    return (
        <div className="bg-[#F3EFE0] h-[300px]">
            <div className="flex justify-center">
                <div className="bg-[#FBF1D3] flex justify-center block p-6 rounded-lg shadow-lg w-max">
                    <div>
                        <h1 className="text-[#FB2576] m-[10px] leading-10 text-4xl font-Volkhov">Explore NFT Collection</h1>
                        <h2 className="text-[#6D67E4] m-[10px] text-xm font-Poppins">Testign of 4 different AI art algorithms, their settings, <br /> response to certain nomenclature, and their ability to produce.</h2>
                        <button type="button"
                            className="m-[10px] hover:bg-blue-700 hover:shadow-lg bg-[#5F9DF7] text-1xl text-[#fff] font-Poppins font-bold px-6 py-4 border border-solid rounded-[50px]">Explore More</button>
                    </div>
                    <div>
                        <Image src={picture} width={200} height={200} alt="" unoptimized={true} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Explore;