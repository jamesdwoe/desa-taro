import React from 'react';

const images = [
  {
    url: 'https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=1200',
    caption: 'Traditional Balinese Temple in Desa Taro'
  },
  {
    url: 'https://images.unsplash.com/photo-1592364395653-83e648b20cc2?q=80&w=1200',
    caption: 'Sacred White Cows of Taro'
  },
  {
    url: 'https://images.unsplash.com/photo-1512276926457-a0f3bf2a45c0?q=80&w=1200',
    caption: 'Rice Terraces near Desa Taro'
  },
  {
    url: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=1200',
    caption: 'Traditional Balinese Dance Performance'
  }
];

const ImageSlideshow: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-center text-green-800">
        Experience Desa Taro
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-white text-center text-lg font-semibold px-4">
                {image.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;