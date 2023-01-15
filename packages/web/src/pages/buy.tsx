import { FC } from "react";

import { useContractWrite, usePrepareContractWrite } from "wagmi";
import ABI from "../assets/message.json";

import Image from "next/image";
import img from "../Components/Thumbnail/d6.png";
import { useRouter } from "next/router";
const Buy: FC = () => {
  const { config } = usePrepareContractWrite({
    address: "0x4c73628fa476fa9e7735509452971b5a27093aa1",
    functionName: "buyItem(address,uint256)",
    abi: ABI,
    args: [0, "tokenId"],
  });


  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  const router = useRouter();
  
  const handleBuyPandaBank = () => {
    router.push("/bank");
  };

  return (
    <div className="bg-[#F3EFE0] h-[960px] flex items-center justify-center">
      <div
        className=" w-[1300px] h-[700px] border-solid border border-8 rounded-[50px]
      border-[#E8C4C4] flex items-center justify-around "
      >
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
          <h1 className="my-2 py-4 font-Poppins font-bold text-6xl text-[#86C8BC]">
            {" "}
            Name{" "}
          </h1>
          <h1 className="my-2 py-4 font-Poppins font-bold text-5xl text-[#FEA1BF]">
            {" "}
            Price eth
          </h1>

          <button
            className="my-2 py-4 font-Poppins font-bold text-4xl
          border border-solid px-[100px] rounded-full bg-[#C780FA] text-[#ECE8DD]"
            disabled={!write}
            onClick={() => write?.()}
          >
            {" "}
            Buy with ETH
          </button>
          {isLoading && <div>Check Wallet</div>}
          {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}

          <br />
          <button
            className="my-2 py-4 font-Poppins font-bold text-4xl
          border border-solid px-[22px] rounded-full bg-[#C58940] text-[#ECE8DD]"
            onClick={handleBuyPandaBank}
          >
            {" "}
            Buy with Panda Bank
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buy;
