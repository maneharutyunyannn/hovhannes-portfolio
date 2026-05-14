export type ApartmentMedia =
    | { type: "image"; src: string }
    | { type: "video"; src: string };

export type Apartment = {
    media: ApartmentMedia[];
    address: string
};