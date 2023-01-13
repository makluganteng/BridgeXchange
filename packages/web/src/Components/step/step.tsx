import { FC } from "react";
import picture from '../Step/step.png';
import Image from "next/image";

const Step: FC = () => {
    return (
        <div className="bg-[#F3EFE0] h-[600px] items-center justify-center flex">
            <div>
                <Image src={picture} width={500} height={500} alt="" unoptimized={true} />
            </div>

            <div>
                <h1 className="text-[#FB2576] text-4xl font-Volkhov list-disc">Create and sell your NFTs</h1>

                <li className="text-[#6D67E4] text-2xl font-Poppins">Step 1</li>
                <h3 className="text-[#6D67E4] font-Poppins indent-8">Create account and setup your wallet</h3>
                <p className="text-[#6D67E4] text-xm font-Poppins indent-8">Create your own proprietary digital wallet to manage both buyers and sellers.</p>

                <li className="text-[#6D67E4] text-2xl font-Poppins">Step 2</li>
                <h3 className="text-[#6D67E4] font-Poppins indent-8">Create your collection</h3>
                <p className="text-[#6D67E4] text-xm font-Poppins indent-8">Compete with the most iconinv wallets in the market by using oir platform.</p>

                <li className="text-[#6D67E4] text-2xl font-Poppins">Step 3</li>
                <h3 className="text-[#6D67E4] font-Poppins indent-8">Add your NFTs</h3>
                <p className="text-[#6D67E4] text-xm font-Poppins indent-8">Our platform integrates to any Enterprise-level ecosystem seamlessly.</p>

                <li className="text-[#6D67E4] text-2xl font-Poppins">Step 4</li>
                <h3 className="text-[#6D67E4] font-Poppins indent-8">Sell your NFTs</h3>
                <p className="text-[#6D67E4] text-xm font-Poppins indent-8">Opensea clone is a collection of 5000 unique NFTs living on the Ethereum blockchain.</p>

            </div>
        </div>
    )
}

export default Step;