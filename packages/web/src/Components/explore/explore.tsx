import { FC } from "react";
import picture from '../Explore/explore.png';
import Image from "next/image";

const Explore: FC = () => {
    return (
        <div className="bg-[#F3EFE0] h-[300px]">
            <div className="flex justify-center">
                <div className="bg-[#FBF1D3] flex justify-center block p-6 rounded-lg shadow-lg bg-white w-max">
                    <div>
                        <h1 className="text-[#FB2576] m-[10px] leading-10 text-4xl font-Volkhov">Explore NFT Collection</h1>
                        <h2 className="text-[#6D67E4] m-[10px] text-xm font-Poppins">Testign of 4 different AI art algorithms, their settings, <br /> response to certain nomenclature, and their ability to produce.</h2>
                        <button type="button"
                            className="m-[10px] font-Poppins inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Explore More</button>
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