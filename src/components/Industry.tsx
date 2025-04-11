import React, { useState } from 'react';
import { Factory } from 'lucide-react';

const Industry = () => {
  const [energyUsage, setEnergyUsage] = useState('');
  const [fuelType, setFuelType] = useState('coal');
  const [result, setResult] = useState<number | null>(null);

  const EMISSION_FACTORS = {
    coal: 2.23,
    naturalGas: 0.91,
    oil: 2.13,
    electricity: 0.92,
  };

  const calculateEmissions = () => {
    const usage = parseFloat(energyUsage);
    if (!isNaN(usage) && usage > 0) {
      const emissions = usage * EMISSION_FACTORS[fuelType as keyof typeof EMISSION_FACTORS];
      setResult(emissions);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-xl shadow-md p-8">
        <div className="flex items-center justify-center mb-8">
          <Factory className="h-12 w-12 text-blue-600 mr-4" />
          <h1 className="text-3xl font-bold text-gray-900">
            Industry Emissions Calculator
          </h1>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Energy Usage (MWh/year)
            </label>
            <input
              type="number"
              value={energyUsage}
              onChange={(e) => setEnergyUsage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter annual energy usage"
              min="0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Primary Energy Source
            </label>
            <select
              value={fuelType}
              onChange={(e) => setFuelType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="coal">Coal</option>
              <option value="naturalGas">Natural Gas</option>
              <option value="oil">Oil</option>
              <option value="electricity">Electricity (Grid Mix)</option>
            </select>
          </div>

          <button
            onClick={calculateEmissions}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Calculate Carbon Emissions
          </button>

          {result !== null && (
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Calculation Results
              </h2>
              <p className="text-gray-700">
                Your annual carbon emissions are approximately{' '}
                <span className="font-bold text-blue-600">
                  {result.toLocaleString()}
                </span>{' '}
                metric tons of CO₂.
              </p>
              <p className="mt-4 text-sm text-gray-600">
                To offset these emissions, you'll need to partner with green farms
                that can collectively offset this amount of CO₂.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Industry