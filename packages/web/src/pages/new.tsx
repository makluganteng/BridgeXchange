import { FC } from "react";
import Step from "../Components/step/step";
import Explore from "../Components/explore/explore";
import Footer from "../Components/footer/footer";

const New: FC = () => {
    return (
        <div>
            <Step />
            <Explore />
            <Footer />
        </div>
    )
}

export default New;