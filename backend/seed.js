const db = require('./dbConn');
const Property = require('./models/Property');

const sampleProperty = {
  title: 'Oceanfront Villa',
  description: 'Discover luxury living at its finest in this stunning single-story beachfront villa. With panoramic ocean views, modern amenities, and direct beach access, this property offers the perfect blend of comfort and coastal elegance. Wake up to the sound of waves and enjoy spectacular sunsets from your private terrace.',
  price: '£2,450,000',
  address: '123 Coastal Drive, Brighton Beach, BN1 2AB',
  image: 'villa-exterior.jpg',
  bedrooms: 3,
  bathrooms: 2,
  size: 2800,
  floorplanImage: 'floorplan.jpg',
  features: [
    'Ocean views',
    'Private terrace',
    'Modern kitchen with island',
    'Open-plan living area',
    'Direct beach access', 
  ],
  rooms: [
    {
      id: 'living-room',
      name: 'Living Room',
      description: 'Spacious area with natural light and modern furnishings.',
      photos: [
        'living-room-1.jpg',
        'living-room-2.jpg',
        'living-room-3.jpg'
      ],
      coordinates: { x: 15, y: 20, width: 35, height: 25 }
    },
    {
      id: 'kitchen',
      name: 'Kitchen',
      description: 'Fully equipped kitchen with stainless steel appliances.',
      photos: [
        'kitchen-1.jpg',
        'kitchen-2.jpg',
        'kitchen-3.jpg'
      ],
      coordinates: { x: 55, y: 20, width: 25, height: 20 }
    },
    {
      id: 'bedroom',
      name: 'Bedroom',
      description: 'Cozy bedroom with ensuite and walk-in closet.',
      photos: [
        'bedroom-1.jpg',
        'bedroom-2.jpg',
        'bedroom-3.jpg'
      ],
      coordinates: { x: 15, y: 55, width: 30, height: 25 }
    },
    {
      id: 'guest-bedroom',
      name: 'Guest Bedroom',
      description: 'Comfortable guest room with ensuite bathroom.',
      photos: [
        'guest-1.jpg',
        'guest-2.jpg',
        'guest-3.jpg'
      ],
      coordinates: { x: 55, y: 55, width: 25, height: 20 }
    },
    {
      id: 'outdoor',
      name: 'Outdoor Area',
      description: 'Spacious outdoor area with seating and ocean views.',
      photos: [
        'outdoor-1.jpg',
        'outdoor-2.jpg',
        'outdoor-3.jpg'
      ],
      coordinates: { x: 20, y: 85, width: 50, height: 10 }
    }
  ]
};

async function seed() {
    try {
        await db.connect();
        await Property.deleteMany({});
        const property = new Property(sampleProperty);
        await property.save();
        console.log('Database seeded with sample property data');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        db.disconnect();
    }
}

seed();