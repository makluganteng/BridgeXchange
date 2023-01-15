// Setup: npm install alchemy-sdk
import { Alchemy, Network } from "alchemy-sdk";



const config = {
    apiKey: "vQzzUz2zwttZpE_hp0eKfb-m9P1pJWke",
    network: Network.ETH_GOERLI,
};
const alchemy = new Alchemy(config);

const main = async () => {
    // Get all NFTs
    
    const nfts = await alchemy.nft.getNftsForOwner(
      "0x790eb45c937c5646eb1f625f0577b4d2100a3fec"
    );
    // Print NFTs
    
    const media = nfts.ownedNfts.map((value) => {
        
        return value
    })
    //console.log(media);
    console.log("All address shown");

    return media
};

export const runMain = async () => {
    try {   
        const media = await main();
        return media
        //process.exit(0);
    } catch (error) {
        console.log(error);
        //process.exit(1);
    }
};