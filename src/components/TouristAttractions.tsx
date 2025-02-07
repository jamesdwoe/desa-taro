import React from 'react';
import { MapPin } from 'lucide-react';

const attractions = [
  {
    name: 'Sacred White Cows Sanctuary',
    description: 'Home to the rare and sacred white cows of Bali, this sanctuary allows visitors to learn about these special animals and their significance in Balinese culture.',
    location: 'Central Taro Village',
    image: 'https://images.unsplash.com/photo-1592364395653-83e648b20cc2?q=80&w=1200'
  },
  {
    name: 'Pura Gunung Raung Temple',
    description: 'An ancient temple complex featuring traditional Balinese architecture and spiritual significance, offering insights into local religious practices.',
    location: 'Northern Taro',
    image: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=1200'
  },
  {
    name: 'Taro Rice Terraces',
    description: 'Beautiful terraced rice fields showcasing traditional Balinese farming methods and offering stunning photo opportunities.',
    location: 'Eastern Taro',
    image: 'https://images.unsplash.com/photo-1512276926457-a0f3bf2a45c0?q=80&w=1200'
  }
];

const TouristAttractions: React.FC = () => {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Tourist Attractions</h1>
        <p className="text-lg text-gray-600">Discover the magical places that make Desa Taro special</p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {attractions.map((attraction, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:-translate-y-2"
          >
            <div className="relative h-48">
              <img
                src={attraction.image}
                alt={attraction.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {attraction.name}
              </h3>
              <p className="text-gray-600 mb-4">{attraction.description}</p>
              <div className="flex items-center text-gray-500">
                <MapPin size={18} className="mr-2" />
                <span>{attraction.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TouristAttractions;