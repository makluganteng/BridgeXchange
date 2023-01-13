import { FC } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  StackDivider,
  Stack,
  Box,
  Divider,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";

import Image from "next/image";
import img from "../Banner/cat.png";

const Trending: FC = () => {
  return (
    <div className="h-[1000px] border border-solid border-[red]">
      <div>
        <Card maxW="sm">
          <CardBody>
            <Image
              src={img}
              width={300}
              height={300}
              alt=""
              unoptimized={true}
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">Living room Sofa</Heading>
              <p>
                This sofa is perfect for modern tropical spaces, baroque
                inspired spaces, earthy toned spaces and for people who love a
                chic design with a sprinkle of vintage design.
              </p>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <Button variant="solid" colorScheme="blue">
                Buy now
              </Button>
              <Button variant="ghost" colorScheme="blue">
                Add to cart
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Trending;
