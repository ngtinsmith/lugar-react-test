import { useEffect, useState } from "react";
import { IProperty } from "../interfaces/properties";

const useProperties = (query: string) => {
    const [properties, setProperties] = useState<IProperty[]>([]);

    useEffect(() => {
        const url = `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_SPACE_TOKEN}`;

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
            },
            body: JSON.stringify({ query }),
        })
            .then((response) => response.json())
            .then(({ data, errors }) => {
                if (errors) {
                    // TODO: handle
                }

                if (data) {
                    setProperties(data.propertyCollection.items);
                }
            })
            .catch((error) => {
                // TODO: handle
            });
    }, [query]);

    return {properties}
};


export default useProperties
