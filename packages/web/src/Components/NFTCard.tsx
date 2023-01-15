import { FC } from "react";
import { Card, CardBody, Stack } from "@chakra-ui/react";
import Image from "next/image";
import img from "./Thumbnail/d6.png";


export default function NFTCard(data) {
  console.log(data.data);


  return (
    <Card>
      <CardBody className=" bg-[#F0DBDB] rounded-lg">
        <Image
          src={data.data.rawMetadata?.image}
          width={300}
          height={300}
          alt=""
          unoptimized={true}
          className="rounded-lg"
        />
        <Stack mt="6" spacing="3">
          <h1 className="pt-1 font-Montserrat font-black text-xl text-[#86C8BC]">
            <text>
              {data.data.contract.name} {data.data.tokenId}
            </text>
          </h1>
          <div className="flex justify-between "></div>
        </Stack>
      </CardBody>
    </Card>
  );
}
