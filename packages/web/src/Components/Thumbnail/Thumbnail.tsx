import { FC } from "react";
import {
  Card,
  CardBody,
  Stack,

} from "@chakra-ui/react";

import Image from "next/image";
import img from "../Thumbnail/d6.png";
import { useRouter } from "next/router";



const Thumbnail: FC = () => {

  const router = useRouter()
  const handleBuyNft = () => {
    router.push('/buy')
  }

  return (
    

        <Card maxW="sm">
          <CardBody className=" bg-[#F0DBDB] rounded-lg">
            <Image
              src={img}
              width={600}
              height={600}
              alt=""
              unoptimized={true}
              className ="rounded-lg"
            />
            <Stack mt="6" spacing="3">

              <h1 className="pt-1 font-Montserrat font-black text-4xl text-[#86C8BC]">Name</h1>
              <div className="flex justify-between ">
              <h1 className="pt-5 font-Poppins font-bold text-[#6F1AB6]">Price eth</h1>
              <button className="font-Poppins font-bold border border-solid
               p-5 rounded-full bg-[#BAD7E9] border-[#BAD7E9] text-[#C58940] text-xl"
               onClick={handleBuyNft}>Buy NFT</button>
              </div>
              
            </Stack>
          </CardBody>
        </Card>
  );
};

export default Thumbnail;
