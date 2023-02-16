export const query = `
    {
        propertyCollection(limit:6) {
            items {
                id
                title
                address
                category
                image {
                    url
                }
            }
        }
    }
`;
