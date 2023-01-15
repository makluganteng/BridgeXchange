import Header from "../Components/Header";
import Home from "./home"
import Image from "next/image";
import metaMaskLogo from "../assets/MetaMask_Fox.svg.png";

import { useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { useAccount, useBalance } from "wagmi";

export default function Base() {
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

  const { address, connector, isConnected } = useAccount();

  const { data, isError, isLoading } = useBalance({
    address: address,
  });

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
