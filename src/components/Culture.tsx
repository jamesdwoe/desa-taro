import React from 'react';

const culturalElements = [
  {
    title: 'Traditional Ceremonies',
    description: 'Desa Taro is known for its vibrant ceremonies, including the famous Mekokoq ritual dedicated to the sacred white cows.',
    image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200'
  },
  {
    title: 'Sacred White Cows',
    description: 'The village is home to the rare and sacred white cows, believed to be descendants of the divine cow of Lord Shiva.',
    image: 'https://images.unsplash.com/photo-1592364395653-83e648b20cc2?q=80&w=1200'
  },
  {
    title: 'Traditional Architecture',
    description: 'The village maintains traditional Balinese architectural styles, with compounds featuring distinctive gates and temples.',
    image: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=1200'
  }
];

const Culture: React.FC = () => {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Culture of Desa Taro</h1>
        <p className="text-lg text-gray-600">
          Discover the rich cultural heritage that makes our village unique
        </p>
      </header>

      <div className="space-y-16">
        {culturalElements.map((element, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row gap-8 items-center ${
              index % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="w-full md:w-1/2">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={element.image}
                  alt={element.title}
                  className="w-full h-[400px] object-cover transform transition-transform hover:scale-105"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl font-semibold text-green-800">
                {element.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {element.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Culture;