import React, { useState } from 'react';
import { ShoppingBag, ArrowUpCircle } from 'lucide-react';

interface Listing {
  id: string;
  type: 'farm' | 'industry';
  name: string;
  capacity: number;
  price: number;
  description: string;
}

const mockListings: Listing[] = [
  {
    id: '1',
    type: 'farm',
    name: 'Green Valley Farm',
    capacity: 5000,
    price: 25000,
    description: 'Oak and Pine forest with high carbon absorption capacity'
  },
  {
    id: '2',
    type: 'industry',
    name: 'Steel Manufacturing Co.',
    capacity: 8000,
    price: 40000,
    description: 'Looking to offset annual carbon emissions'
  }
];

const Marketplace = () => {
  const [listings] = useState<Listing[]>(mockListings);
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  const [bidAmount, setBidAmount] = useState<string>('');

  const handleBid = (listing: Listing) => {
    const amount = parseFloat(bidAmount);
    if (!amount || amount <= 0) {
      alert('Please enter a valid bid amount');
      return;
    }
    
    if (amount <= listing.price) {
      alert('Bid must be higher than the current price');
      return;
    }

    alert(`Bid placed successfully for ${listing.name}`);
    setBidAmount('');
    setSelectedListing(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-center mb-8">
        <ShoppingBag className="h-12 w-12 text-green-600 mr-4" />
        <h1 className="text-3xl font-bold text-gray-900">Carbon Offset Marketplace</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Green Farm Listings</h2>
          <div className="space-y-4">
            {listings.filter(l => l.type === 'farm').map(listing => (
              <div key={listing.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900">{listing.name}</h3>
                <p className="text-gray-600 mt-2">{listing.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Carbon Capacity</p>
                    <p className="font-semibold">{listing.capacity} kg CO₂/year</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Current Price</p>
                    <p className="font-semibold">${listing.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedListing(listing)}
                  className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                >
                  Place Bid
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Industry Requests</h2>
          <div className="space-y-4">
            {listings.filter(l => l.type === 'industry').map(listing => (
              <div key={listing.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900">{listing.name}</h3>
                <p className="text-gray-600 mt-2">{listing.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Carbon Offset Needed</p>
                    <p className="font-semibold">{listing.capacity} kg CO₂/year</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Budget</p>
                    <p className="font-semibold">${listing.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedListing(listing)}
                  className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Make Offer
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedListing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Place {selectedListing.type === 'farm' ? 'Bid' : 'Offer'}</h3>
              <button
                onClick={() => setSelectedListing(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <p className="mb-4">
              {selectedListing.type === 'farm' 
                ? `Current price: $${selectedListing.price}`
                : `Budget: $${selectedListing.price}`}
            </p>
            <input
              type="number"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500 mb-4"
              placeholder="Enter amount"
            />
            <button
              onClick={() => handleBid(selectedListing)}
              className={`w-full ${
                selectedListing.type === 'farm' ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'
              } text-white py-2 px-4 rounded-md transition-colors`}
            >
              Submit {selectedListing.type === 'farm' ? 'Bid' : 'Offer'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Marketplace;