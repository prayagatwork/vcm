import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaf, Factory, ShoppingBag, TreePine, Wind, Droplets } from 'lucide-react';
import ReactPlayer from 'react-player';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="relative mb-16">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1"
          alt="Forest aerial view"
          className="w-full h-[500px] object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-2xl flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">
              Virtual Carbon Market
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Join the global movement towards carbon neutrality through sustainable partnerships
              and innovative carbon trading solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Main Actions */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
        <button
          onClick={() => navigate('/green-farm')}
          className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow group"
        >
          <div className="flex flex-col items-center">
            <Leaf className="h-16 w-16 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Green Farm
            </h2>
            <p className="text-gray-600 text-center">
              Calculate your land's carbon offset potential and connect with
              industries.
            </p>
          </div>
        </button>

        <button
          onClick={() => navigate('/industry')}
          className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow group"
        >
          <div className="flex flex-col items-center">
            <Factory className="h-16 w-16 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Industry
            </h2>
            <p className="text-gray-600 text-center">
              Calculate your carbon footprint and find green partners for offset.
            </p>
          </div>
        </button>

        <button
          onClick={() => navigate('/marketplace')}
          className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow group"
        >
          <div className="flex flex-col items-center">
            <ShoppingBag className="h-16 w-16 text-purple-600 mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Marketplace
            </h2>
            <p className="text-gray-600 text-center">
              Browse and bid on carbon offset listings from farms and industries.
            </p>
          </div>
        </button>
      </div>

      {/* Environmental Impact Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Environmental Impact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <TreePine className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">1M+ Trees</h3>
            <p className="text-gray-600">Planted through our partner network</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Wind className="h-12 w-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">500K Tons</h3>
            <p className="text-gray-600">CO₂ offset annually</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <Droplets className="h-12 w-12 text-cyan-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">200+ Partners</h3>
            <p className="text-gray-600">Active in our ecosystem</p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Learn About Carbon Offsetting</h2>
        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=yiw6_JakZFc"
            width="100%"
            height="500px"
            controls
            className="rounded-xl"
          />
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-white rounded-xl shadow-md p-8 mb-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 font-bold">1</span>
            </div>
            <h3 className="font-semibold mb-2">Calculate</h3>
            <p className="text-gray-600">
              Measure your carbon footprint or offset potential
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 font-bold">2</span>
            </div>
            <h3 className="font-semibold mb-2">Connect</h3>
            <p className="text-gray-600">
              Find suitable partners for carbon offset
            </p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 font-bold">3</span>
            </div>
            <h3 className="font-semibold mb-2">Offset</h3>
            <p className="text-gray-600">
              Achieve carbon neutrality through partnership
            </p>
          </div>
        </div>
      </div>

      {/* Investment Benefits */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          Why Invest in Carbon Offsetting?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1470115636492-6d2b56f9146d"
              alt="Sustainable investment"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Growing Market</h3>
                <p className="mt-2 text-gray-600">The carbon offset market is expected to reach $100B by 2030</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">ESG Compliance</h3>
                <p className="mt-2 text-gray-600">Meet environmental regulations and improve ESG ratings</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;