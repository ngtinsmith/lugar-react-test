import { FC } from "react";
import { PropertyCategory } from "../../interfaces/properties";
import { FilterContainer, Option, Select } from "./styled.components";

interface PropertiesProps {
    filters: string[] | PropertyCategory[];
    onChange: (value: string) => void;
}

const PropertiesFilter: FC<PropertiesProps> = ({ filters, onChange }) => {
    return (
        <FilterContainer>
            <Select onChange={(e) => onChange(e.target.value)}>
                <Option value="">All categories</Option>
                {filters.map((filter, i) => (
                    <Option key={i} value={filter}>
                        {filter}
                    </Option>
                ))}
            </Select>
        </FilterContainer>
    );
};

export default PropertiesFilter;
