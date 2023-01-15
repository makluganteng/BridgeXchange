import { NextPage } from "next"
import { useRouter } from "next/router"
import Image from "next/image";
import { useEffect, useState } from "react";
import { runMain } from "../../../function/mynft";
import * as ethers from 'ethers';
import ABI from "../../../assets/message.json";

const NFTPage: NextPage = () => {
  const router = useRouter();
  const { nftAddress, tokenId } = router.query
  const [image, setImage] = useState<string>('')
  const [title, setTitle] = useState<string>('')
  // const walletAddress = sessionStorage.getItem("MetamaskAddress")

  const contractAddress = "0x4c73628fa476fa9e7735509452971b5a27093aa1"; // address of the deployed contract
  const abi = ABI// ABI of the contract
  const provider = new ethers.providers.AlchemyProvider('goerli', 'vQzzUz2zwttZpE_hp0eKfb-m9P1pJWke');
  const walletProvider = new ethers.providers.JsonRpcProvider('https://goerli.infura.io/v3/c5e3f8756c1c4c86aec6f14ba737aea9')
  const handleSell = async () => {
    const accounts = walletProvider.getSigner("0x5073c3929c9BdECd87Cc63068Fd3185F0b6f22A5")
    console.log(accounts)
    const smartContractNFT = new ethers.Contract(contractAddress, abi, accounts)
    const options = { gasLimit: 8000000 }
    try {
      const list = await smartContractNFT.functions.listItem(nftAddress, tokenId, 1, options)
      console.log("fsfsf")
      const receipt = await list.wait()
      console.log(receipt)
    } catch (e) {
      console.log(e)
    }

  };



  useEffect(() => {
    const fetchData = async () => {

      const nft = await runMain();
      const resp = nft?.filter(value => value.tokenId === tokenId && value.contract.address === nftAddress)
      console.log(resp)
      if (resp) {
        setImage(resp[0].rawMetadata?.image || "")
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
            border border-solid px-[100px] rounded-full bg-[#C780FA] text-[#ECE8DD]"
            onClick={handleSell}> List NFT</button>
          <br />
        </div>
      </div>
    </div>



  )
}

export default NFTPage