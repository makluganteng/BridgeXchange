import { FC, useState, useEffect, } from "react";

import Footer from "../Components/footer/footer";
import NFTCard from "../Components/NFTCard";
import Header from "../Components/Header";
import { runMain } from "../function/mynft";
import {  SimpleGrid } from "@chakra-ui/react"; 
import { NftFilters } from "alchemy-sdk";
import { useRouter } from "next/router";
import Link from "next/link";
interface TokenResponse {
  balance: number;
  contract: {
      address: string;
      contractDeployer: string;
      deployedBlockNumber: number;
      name: string;
  }
  openSea: {
      collectionName: string | undefined;
      description: string | undefined;
      discordUrl: string | undefined;
      externalUrl: string | undefined;
      floorPrice: number | undefined;
      imageUrl: string | undefined;
      lastIngestedAt: string;
      safelistRequestStatus: string | undefined;
      twitterUsername: string | undefined;
  }
  symbol: string;
  tokenId: number;
  tokenType: string;
  totalSupply: number;
  prototype: Object;
  description: string;
  media: {
      bytes: number;
      format: string;
      gateway: string;
      raw: string;
  }[]
}


const New: FC = () => {
  
  const [state, setPanel] = useState({
    isPaneOpen: false,
  });
  const [NFT, setNFT] = useState<TokenResponse[]>([]);

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {

      const nft: TokenResponse[] = await runMain();
      setNFT(nft);
      
    };
    // call the function
    fetchData().catch(console.error);
    
    
    // make sure to catch any error
  }, []);

  const router = useRouter()
  // const handleSellNft = (address: string, tokenId:string) => {
  //   router.push(`/sell/${address}/${tokenId}`)
  // }
  const handleSellNft = (nftAddress: string, tokenId: string) => {
    router.push(`/sell/${nftAddress}/${tokenId}`)
  }

  return (
    <div className="bg-[#F3EFE0]">
      <Header setPanel={setPanel}></Header>
      
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          padding={5}
        >

          {NFT?.map((value,key) => {
            return (
              <Link href={`/sell/${value.contract.address}/${value.tokenId}`}>
                <NFTCard data={value}></NFTCard>
              </Link>
                             
            );
          })}


          {/* {NFT?.map((value) => (
              //const adressnft = NFT.
            <div onClick={()=>{handleSellNft("asd","asd")}}>
              <NFTCard data={value}></NFTCard>
            </div>
          ))} */}
        </SimpleGrid>

      <Footer />
    </div>
  );
};

export default New;
