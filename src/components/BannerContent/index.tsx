import Button from "../Button";
import {
    Greetings,
    HeroCTAs,
    HeroSubtitle,
    Container,
} from "./styled.components";

const BannerContent = () => {
    return (
        <Container>
            <Greetings>A home is built with love and dreams</Greetings>
            <HeroSubtitle>
                Real estate farm that makes your dreams true
            </HeroSubtitle>
            <HeroCTAs>
                <Button kind="primary">Our projects</Button>
                <Button>Contact us</Button>
            </HeroCTAs>
        </Container>
    );
};

export default BannerContent;
