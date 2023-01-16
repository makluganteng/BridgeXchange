import { FC } from "react";
import Banner from "@/components/Banner";
import Explore from "@/components/Explore";
import Footer from "@/components/Footer";
import Step from "@/components/Step";
import Thumbnail from "@/components/Thumbnail";

const Home: FC = () => {
  return (
    <div>
      <Banner />
      <Thumbnail />
      <Step />
      <Explore />
    </div>
  )
}

export default Home;
