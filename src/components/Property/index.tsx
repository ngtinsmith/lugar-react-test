import { FC } from "react";
import { IProperty } from "../../interfaces/properties";
import {
    Container,
    Details,
    DetailsWrapper,
    PropertyLocation,
    PropertyName,
} from "./styled.components";

type PropertyProps = Pick<IProperty, "title" | "image" | "address">;

const Property: FC<PropertyProps> = ({ title, address, image }) => {
    return (
        <Container background={image.url}>
            <DetailsWrapper>
                <Details>
                    <PropertyName>{title}</PropertyName>
                    <PropertyLocation>{address}</PropertyLocation>
                </Details>
            </DetailsWrapper>
        </Container>
    );
};

export default Property;
