export const FILTERS = [
  "Beachfront",
  "Cabins",
  "Amazing views",
  "Trending",
  "Lakefront",
  "Countryside",
];

export type PropertyListingType = {
  id: string;
  title: string;
  location: string;
  pricePerNight: number;
  rating: number;
  beds: number;
  baths: number;
  image: any;
};

export const SAMPLE_DATA: PropertyListingType[] = [
  {
    id: "1",
    title: "Modern beach house with ocean view",
    location: "Diani, Kenya",
    pricePerNight: 120,
    rating: 4.8,
    beds: 3,
    baths: 2,
    image: require("@/assets/images/mansion.png"),
  },
  {
    id: "2",
    title: "Cozy cabin in the woods",
    location: "Kigali, Rwanda",
    pricePerNight: 80,
    rating: 4.6,
    beds: 2,
    baths: 1,
    image: require("@/assets/images/mansion.png"),
  },
  {
    id: "3",
    title: "City apartment near conference center",
    location: "Nairobi, Kenya",
    pricePerNight: 95,
    rating: 4.7,
    beds: 1,
    baths: 1,
    image: require("@/assets/images/mansion.png"),
  },
];
