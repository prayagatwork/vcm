import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Factory, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-900">CarbonOffset</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/green-farm"
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Green Farm
            </Link>
            <Link
              to="/industry"
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Industry
            </Link>
            <Link
              to="/marketplace"
              className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
            >
              <ShoppingBag className="h-4 w-4 mr-1" />
              Marketplace
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar