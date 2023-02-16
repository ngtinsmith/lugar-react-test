import { useState } from "react";
import { query } from "../../constants/query";
import { propertyCategories } from "../../constants/propertyCategories";
import useProperties from "../../hooks/useProperties";
import Properties from "../Properties";
import PropertiesFilter from "../PropertiesFilter";
import {
    Container,
    ContentSubTitle,
    ContentTitle,
    PropertiesHeader,
    PropertiesSection,
    PropertiesSectionFooter,
} from "./styled.components";
import Button from "../Button";

const Content = () => {
    const { properties } = useProperties(query);
    const [filter, setFilter] = useState("");

    const filteredProperties = properties.filter(
        (property) => property.category === filter || filter === ""
    );

    const handleFilterChange = (value: string) => {
        setFilter(value);
    };

    return (
        <Container>
            <PropertiesSection>
                <PropertiesHeader>
                    <ContentTitle>Properties</ContentTitle>
                    <ContentSubTitle>
                        Turpis facilisis tempor pulvinar in lobortis ornare
                        magna.
                    </ContentSubTitle>
                </PropertiesHeader>
                <PropertiesFilter
                    filters={propertyCategories}
                    onChange={handleFilterChange}
                />
                <Properties properties={filteredProperties} />

                <PropertiesSectionFooter>
                    <Button kind="primary">Load more</Button>
                </PropertiesSectionFooter>
            </PropertiesSection>
            {/* TODO: add about
                <AboutSection>
                    <ContentTitle>
                        Award winning real estate company in Dubai
                    </ContentTitle>
                </AboutSection>
            */}
        </Container>
    );
};

export default Content;
