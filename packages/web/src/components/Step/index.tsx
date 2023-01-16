import { FC } from "react";
import picture from './step.png';
import Image from "next/image";

const Step: FC = () => {
  return (
    <div className="bg-[#F3EFE0] min-h-96">
    <div className="flex items-center justify-center max-w-7xl m-auto px-4 py-8">
      <div>
        <Image src={picture} width={600} height={600} alt="" />
      </div>

      <div>
        <h1 className="text-[#FB2576] mb-2 text-6xl font-Volkhov font-bold">Create and sell your NFTs</h1>

        <ul className="list-disc ml-6 space-y-2">
          <li className="text-[#6D67E4] text-2xl font-Poppins">
            <span className="text-[#6D67E4] font-Poppins">Create account and setup your wallet</span>
            <span className="text-[#6D67E4] text-xm font-Poppins">Create your own proprietary digital wallet to manage both buyers and sellers.</span>
          </li>

          <li className="text-[#6D67E4] text-2xl font-Poppins">
            <span className="text-[#6D67E4] font-Poppins">Create your collection</span>
            <span className="text-[#6D67E4] text-xm font-Poppins">Compete with the most iconinv wallets in the market by using oir platform.</span>
          </li>

          <li className="text-[#6D67E4] text-2xl font-Poppins">
            <span className="text-[#6D67E4] font-Poppins">Add your NFTs</span>
            <span className="text-[#6D67E4] text-xm font-Poppins">Our platform integrates to any Enterprise-level ecosystem seamlessly.</span>
          </li>

          <li className="text-[#6D67E4] text-2xl font-Poppins">
            <span className="text-[#6D67E4] font-Poppins">Sell your NFTs</span>
            <span className="text-[#6D67E4] text-xm font-Poppins">Opensea clone is a collection of 5000 unique NFTs living on the Ethereum blockchain.</span>
          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Step;
