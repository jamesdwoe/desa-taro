import React from 'react';
import { ExternalLink } from 'lucide-react';

const sources = [
  {
    category: 'Images',
    items: [
      {
        title: 'Traditional Balinese Temple',
        url: 'https://images.unsplash.com/photo-1604999333679-b86d54738315',
        author: 'Geio Tischler',
        platform: 'Unsplash'
      },
      {
        title: 'Sacred White Cows',
        url: 'https://images.unsplash.com/photo-1592364395653-83e648b20cc2',
        author: 'David Clode',
        platform: 'Unsplash'
      },
      {
        title: 'Rice Terraces',
        url: 'https://images.unsplash.com/photo-1512276926457-a0f3bf2a45c0',
        author: 'Niklas Weiss',
        platform: 'Unsplash'
      },
      {
        title: 'Traditional Dance Performance',
        url: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2',
        author: 'Artem Beliaikin',
        platform: 'Unsplash'
      }
    ]
  },
  {
    category: 'Design Resources',
    items: [
      {
        title: 'Playfair Display Font',
        url: 'https://fonts.google.com/specimen/Playfair+Display',
        author: 'Claus Eggers Sørensen',
        platform: 'Google Fonts'
      },
      {
        title: 'Icons',
        url: 'https://lucide.dev',
        author: 'Lucide Contributors',
        platform: 'Lucide'
      }
    ]
  }
];

const Sources: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Sources & Attributions</h1>
        <p className="text-lg text-gray-600">
          Credits and references for all resources used in this website
        </p>
      </header>

      <div className="space-y-8">
        {sources.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-green-800 mb-6">
              {category.category}
            </h2>
            <div className="space-y-6">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="mb-2 sm:mb-0">
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600">
                      By {item.author} on {item.platform}
                    </p>
                  </div>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors"
                  >
                    View Source
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-green-800 mb-6">
            Additional Credits
          </h2>
          <div className="prose text-gray-700">
            <p>
              This website was created to showcase the beauty and culture of Desa Taro.
              All content is for demonstration purposes only. Special thanks to all the
              photographers and creators who made their work available for use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sources;