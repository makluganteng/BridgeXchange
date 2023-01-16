import Header from "../Components/Header";
import Home from "./home"
import Image from "next/image";
import metaMaskLogo from "../assets/MetaMask_Fox.svg.png";
import { useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useAccount, useBalance } from "wagmi";
import { useEffect } from "react";
import { runMain } from "../function/mynft";
import ABI from "../assets/message.json";
import * as ethers from 'ethers';
import nftABI from '../assets/ERC721.json'
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import { NextPage } from "next";

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
  rawMetadata: {
    image: string;
  }
  media: {
    bytes: number;
    format: string;
    gateway: string;
    raw: string;
  }[]
}

interface OwnedResponse {
  nftAddress: string;
  nftURL: string;
  tokenId: number;

}

export default function Base() {
  let walletProvider;

  const [state, setPanel] = useState({
    isPaneOpen: false,
  });

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const [NFT, setNFT] = useState<TokenResponse[]>([]);

  const { address, connector, isConnected } = useAccount();


  useEffect(() => {
    sessionStorage.setItem("MetamaskAddress", address as string)

    const fetchData = async () => {
      const nft: TokenResponse[] = await runMain();
      setNFT(nft);
    }
    fetchData()
    walletProvider = new ethers.providers.Web3Provider(window.ethereum as any)
  }, [])

  const { data, isError, isLoading } = useBalance({
    address: address,
  });

  const checkMyListing = async (responseMap: any) => {
    const accounts = walletProvider.getSigner()
    const smartContractNFT = new ethers.Contract(contractAddress, abi, accounts)
    console.log(responseMap)
    try {
      var nftAddress = responseMap[1].nftAddress
      var tokenId = responseMap[1].tokenId

      const nft = new ethers.Contract(nftAddress, nftABI, accounts)
      await nft.approve(contractAddress, tokenId)
      //for (let i = 0; i < responseMap.length; i++) {

      const list = await smartContractNFT.getListing(nftAddress, tokenId)
      console.log(list)
      //console.log(tokenId)
      //}
    } catch (e) {
      console.log(e)
    }
  }

  const mapNFT = () => {
    let responseMap: OwnedResponse[] = []
    NFT.map((value) => {
      responseMap.push({ nftAddress: value.contract.address, tokenId: value.tokenId, nftURL: value.rawMetadata.image })
    })
    console.log(responseMap)
    checkMyListing(responseMap)
  }

  //smart contract stuff ----------------------------------------------------------
  //const walletProvider = new ethers.providers.Web3Provider(window.ethereum as any);
  const contractAddress = "0x7136c7ecdb01f815fd151a01d8fd17e34d1e3b2e"; // address of the deployed contract
  const abi = ABI

  return (
    <div>
      <Header setPanel={setPanel}></Header>
      <Home></Home>

      {isConnected ? (
        <SlidingPane
          width="400px"
          isOpen={state.isPaneOpen}
          onRequestClose={() => {
            // triggered on "<" on left top click or on outside click
            setPanel({ isPaneOpen: false });
          }}
        >
          <div className="flex justify-between p-3 ">
            <div className="flex content-center">
              <Image
                src={metaMaskLogo}
                height={20}
                width={20}
                alt="image of opensea"
              />
              <text className="font-medium">{connector?.name} </text>
            </div>

            <div className="max-w-[30%] overflow-hidden truncate ">
              <text textLength={3}>{address}</text>
            </div>
          </div>
          <div
            style={{
              borderTop: "0.1px solid #E8E8E8",
              borderLeft: "0.1px solid #E8E8E8	",
              borderRight: "0.1px solid #E8E8E8	",
              borderRadius: "10px 10px 0px 0px",
              height: "10vh",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <text>Balance: </text>
              <div>
                <text className="font-bold">
                  {data?.formatted} {data?.symbol}
                </text>
              </div>
            </div>
          </div>
          <div>
            <button
              style={{
                backgroundColor: isHover ? "#0096FF" : "#007bd1",
                color: "white",
                width: "100%",
                borderRadius: "0 0 5px 5px",
                height: "8vh",
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseDown={handleMouseLeave}
              onMouseUp={handleMouseEnter}
            >
              Top Up
            </button>
          </div>
        </SlidingPane>
      ) : null}
    </div>
  );
}
