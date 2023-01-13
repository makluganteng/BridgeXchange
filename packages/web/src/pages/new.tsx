import { FC } from "react";
import Step from "../Components/step/step";
import Explore from "../Components/explore/explore";
import Footer from "../Components/footer/footer";
import Bank from "../Components/bank/bank";

const New: FC = () => {
    return (
        <div>
            <Step />
            <Explore />
            <Footer />
            <Bank />
        </div>
    )
}

export default New;