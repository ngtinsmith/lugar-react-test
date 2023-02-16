import { FC } from "react";
import Property from "../Property";
import { IProperty } from "../../interfaces/properties";
import { Grid } from "./styled.components";

interface PropertiesProps {
    properties: IProperty[];
}

const Properties: FC<PropertiesProps> = ({ properties }) => {
    return (
        <Grid>
            {properties.map((property) => (
                <Property
                    key={property.id}
                    title={property.title}
                    address={property.address}
                    image={property.image}
                />
            ))}
        </Grid>
    );
};

export default Properties;
