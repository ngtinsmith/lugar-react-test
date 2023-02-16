export interface IProperty {
    id: number;
    title: string;
    address: string;
    image: {
        url: string;
    };
    category: PropertyCategory;
}

export type PropertyCategory = "Apartment" | "House" | "Penthouse" | "Villa";
