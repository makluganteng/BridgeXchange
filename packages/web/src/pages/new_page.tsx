import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

export default function Home() {
  const { address, connector, isConnected } = useAccount();
  return (
    <div>
        <h2>hello</h2>
    </div>
  );
}
