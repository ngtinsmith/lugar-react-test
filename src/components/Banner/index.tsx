import BannerContent from "../BannerContent";
import Header from "../Header";
import { BannerImage, Container } from "./styled.components";
import HouseImg from "../../assets/house.png";

const Banner = () => {
    return (
        <Container>
            <Header />
            <BannerContent />
            <BannerImage src={HouseImg} />
        </Container>
    );
};

export default Banner;
