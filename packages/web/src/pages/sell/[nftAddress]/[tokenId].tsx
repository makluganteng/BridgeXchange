import { NextPage } from "next"
import { useRouter } from "next/router"
import Image from "next/image";
import { useEffect, useState } from "react";
import { runMain } from "../../../function/mynft";


const NFTPage: NextPage = () => {
  const router = useRouter();
  const { nftAddress, tokenId } = router.query
  const [image, setImage] = useState<string>('')
  const [title, setTitle] = useState<string>('')


  useEffect(() => {
    const fetchData = async () => {

      const nft = await runMain();
      const resp = nft?.filter(value => value.tokenId === tokenId && value.contract.address === nftAddress)
      console.log(resp)
      if (resp) {
        setImage(resp[0].media[0].raw)
        setTitle(resp[0].contract.name || "")
      }
    };
    
    fetchData()
  },);


  return (
    <div className="bg-[#F3EFE0] h-[960px] flex items-center justify-center">
      <div className=" w-[1300px] h-[700px] border-solid border border-8 rounded-[50px]
        border-[#E8C4C4] flex items-center justify-around ">
        <div className="pl-20">
          <Image
            src={image}
            width={500}
            height={500}
            alt=""
            unoptimized={true}
            className="rounded-lg border border-solid border-8"
          />
        </div>
        <div className="my-2 pr-32">
          <h1 className="my-2 py-4 font-Poppins font-bold text-6xl text-[#86C8BC]"> {title}</h1>
          <h1 className="my-2 py-4 font-Poppins font-bold text-5xl text-[#FEA1BF]"> {tokenId}</h1>

          <button className="my-2 py-4 font-Poppins font-bold text-4xl
            border border-solid px-[100px] rounded-full bg-[#C780FA] text-[#ECE8DD]"> List NFT</button>
          <br />
        </div>
      </div>
    </div>



  )
}

export default NFTPage