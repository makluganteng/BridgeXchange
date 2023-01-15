import { FC } from "react";
import Banner from "../Components/Banner/Banner";
import Explore from "../Components/explore/explore";
import Footer from "../Components/footer/footer";
import Step from "../Components/step/step";
import Thumbnail from "../Components/Thumbnail/Thumbnail";



const Home: FC = () => {
    return (
        <div>
            <Banner />
            <Thumbnail />
            <Step />
            <Explore />
            <Footer />

        </div>
    )
}

export default Home;