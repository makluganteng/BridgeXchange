import { FC } from "react";
import Banner from "@/Components/Banner";
import Explore from "@/Components/Explore";
import Footer from "@/Components/Footer";
import Step from "@/Components/Step";
import Thumbnail from "@/Components/Thumbnail";

const Home: FC = () => {
  return (
    <div>
      <Banner />
      <Thumbnail />
      <Step />
      <Explore />
    </div>
  );
};

export default Home;
