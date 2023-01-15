import { FC, useState, useEffect, } from "react";

import Footer from "../Components/footer/footer";
import NFTCard from "../Components/NFTCard";
import Header from "../Components/Header";
import { runMain } from "../function/mynft";
import {  SimpleGrid } from "@chakra-ui/react"; 
import { NftFilters } from "alchemy-sdk";


const New: FC = () => {
  
  const [state, setPanel] = useState({
    isPaneOpen: false,
  });
  const [NFT, setNFT] = useState<(string | undefined)[] | undefined>([]);

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {

      const nft = await runMain();
      setNFT(nft);
    };
    // call the function
    fetchData().catch(console.error);
    
    
    // make sure to catch any error
  }, []);

  return (
    <div className="bg-[#F3EFE0]">
      <Header setPanel={setPanel}></Header>
      
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          padding={5}
        >
          {NFT?.map((value) => (
            <NFTCard data={value}></NFTCard>
          ))}
        </SimpleGrid>

      <Footer />
    </div>
  );
};

export default New;
