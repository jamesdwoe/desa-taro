import React, { useState } from 'react';
import { Menu, X, MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import Navbar from './components/Navbar';
import ImageSlideshow from './components/ImageSlideshow';
import TouristAttractions from './components/TouristAttractions';
import Culture from './components/Culture';
import Contact from './components/Contact';
import Sources from './components/Sources';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mapError, setMapError] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home mapError={mapError} setMapError={setMapError} />;
      case 'attractions':
        return <TouristAttractions />;
      case 'culture':
        return <Culture />;
      case 'contact':
        return <Contact />;
      case 'sources':
        return <Sources />;
      default:
        return <Home mapError={mapError} setMapError={setMapError} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="container mx-auto px-4 py-8">
        {renderSection()}
      </main>
    </div>
  );
}

interface HomeProps {
  mapError: boolean;
  setMapError: (error: boolean) => void;
}

function Home({ mapError, setMapError }: HomeProps) {
  return (
    <div className="space-y-16">
      <header className="text-center py-16 bg-gradient-to-r from-green-800 to-green-600 text-white rounded-lg shadow-xl">
        <h1 className="text-6xl font-bold mb-4 animate-fade-in tropical-font">DESA TARO</h1>
        <p className="text-xl italic">Discover Bali's Hidden Cultural Gem</p>
      </header>

      <section className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-green-800">What is DESA TARO?</h2>
            <p className="text-lg text-gray-700">
              Desa Taro is an enchanting traditional village nestled in the heart of Bali, Indonesia. 
              It is renowned for its preservation of ancient Balinese culture and its sacred white cows, 
              making it a unique destination that offers visitors an authentic glimpse into traditional 
              Balinese village life.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4 text-green-800">Where is Desa Taro located?</h2>
            <p className="text-lg text-gray-700 mb-4">
              Desa Taro is situated in the Tegallalang district of Gianyar Regency, approximately 
              45 minutes north of Ubud. The village is perfectly positioned in the highlands of Bali, 
              surrounded by lush forests and terraced rice fields.
            </p>
            <div className="aspect-w-16 aspect-h-9">
              {mapError ? (
                <div className="w-full h-[400px] rounded-lg bg-gray-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-lg text-gray-600 mb-2">Map loading failed</p>
                    <a 
                      href="https://www.google.com/maps?q=Taro,+Tegallalang,+Gianyar+Regency,+Bali" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700 underline"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
              ) : (
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15779.037358695415!2d115.27942!3d-8.312697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1989d9977e0cd%3A0x91c5d54ad457f08d!2sTaro%2C+Tegallalang%2C+Gianyar+Regency%2C+Bali!5e0!3m2!1sen!2sid!4v1710644160980!5m2!1sen!2sid"
                  className="w-full h-[400px] rounded-lg"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onError={() => setMapError(true)}
                />
              )}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4 text-green-800">Why should you visit Desa Taro?</h2>
            <p className="text-lg text-gray-700">
              You should visit Desa Taro because it offers an authentic and unspoiled glimpse into 
              traditional Balinese village life, away from the tourist crowds. The village is home to 
              the sacred white cows of Bali, ancient temples, and pristine natural landscapes that 
              showcase the island's true beauty. Additionally, the warm hospitality of the local 
              people and their dedication to preserving their cultural heritage makes every visit a 
              meaningful and enriching experience.
            </p>
          </div>
        </div>
      </section>

      <ImageSlideshow />
    </div>
  );
}

export default App;