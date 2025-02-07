import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <header className="text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Get in touch with us to plan your visit to Desa Taro
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <h2 className="text-2xl font-semibold text-green-800 mb-6">
            Contact Information
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <MapPin className="text-green-600" size={24} />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">
                  Desa Taro, Tegallalang, Gianyar Regency, Bali, Indonesia
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="text-green-600" size={24} />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+62 361 123456</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Mail className="text-green-600" size={24} />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">info@desataro.com</p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-green-600 hover:text-green-700 transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-green-600 hover:text-green-700 transition-colors"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-green-800 mb-6">
            Send us a Message
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;