export interface Room {
  name: string;
  description: string;
  photos: string[];
  coordinates: { x: number; y: number; width: number; height: number };
}

export interface Property {
  title: string;
  description: string;
  price: number;
  address: string;
  thumbnail: string;
  propertySize: string;
  floorplanImage: string;
  rooms: Room[];
}


