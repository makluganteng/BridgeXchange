import { FC } from "react";
import Banner from "../Components/Banner/Banner";
import Explore from "../Components/explore/explore";
import Footer from "../Components/footer/footer";
import Step from "../Components/step/step";
import Thumbnail from "../Components/Thumbnail/Thumbnail";
import { SimpleGrid } from "@chakra-ui/react"; 
import { useContractRead } from "wagmi";
import ABI from "../assets/message.json";

const Home: FC = () => {

    const { data, isError, isLoading } = useContractRead({
      address: "0x4c73628fa476fa9e7735509452971b5a27093aa1",
      functionName: "itemList()",
      abi: ABI,
      args: [],
    });

    return (
      <div>
        <Banner />
        <div className="p-[20px] h-[1000px] bg-[#F3EFE0]">
          <SimpleGrid
            spacing={4}
            templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            padding={3}
          >
           <Thumbnail></Thumbnail>
          </SimpleGrid>
        </div>
        <Step />
        <Explore />
        <Footer />
      </div>
    );
}

export default Home;