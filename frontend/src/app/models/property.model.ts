export interface Room {
  id: string;
  name: string;
  description: string;
  photos: string[];
  coordinates: { x: number; y: number; width: number; height: number };
}

export interface Property {
  title: string;
  description: string;
  price: string;
  address: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
  size: number;
  floorplanImage: string;
  features: string[];
  rooms: Room[];
}


