const db = require('./dbConn');
const Property = require('./models/Property');

const sampleProperty = {
  title: 'Elegant Family Home',
  shortDescription: 'Beautiful 3-bedroom home with modern finishes and large backyard.',
  price: 520000,
  address: '456 Elm Street, Sampletown, USA',
  thumbnail: 'https://via.placeholder.com/300x200?text=House+Thumbnail',
  propertySize: '2800 sqft',
  floorplanImage: 'floorplan.jpg',
  rooms: [
    {
      name: 'Living Room',
      description: 'Spacious area with natural light and modern furnishings.',
      photos: [
        'https://via.placeholder.com/200x150?text=LivingRoom1',
        'https://via.placeholder.com/200x150?text=LivingRoom2'
      ],
      coordinates: { x: 50, y: 60, width: 100, height: 80 }
    },
    {
      name: 'Kitchen',
      description: 'Fully equipped kitchen with stainless steel appliances.',
      photos: [
        'https://via.placeholder.com/200x150?text=Kitchen1'
      ],
      coordinates: { x: 200, y: 60, width: 100, height: 80 }
    },
    {
      name: 'Bedroom',
      description: 'Cozy bedroom with ensuite and walk-in closet.',
      photos: [
        'https://via.placeholder.com/200x150?text=Bedroom1'
      ],
      coordinates: { x: 350, y: 60, width: 100, height: 80 }
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