import React, { useState } from 'react';
import { Trees as Tree } from 'lucide-react';

const PLANTS_DATA = {
  oak: { co2PerYear: 22, name: 'Oak Tree' },
  pine: { co2PerYear: 20, name: 'Pine Tree' },
  maple: { co2PerYear: 18, name: 'Maple Tree' },
  bamboo: { co2PerYear: 12, name: 'Bamboo' },
};

const GreenFarm = () => {
  const [landArea, setLandArea] = useState('');
  const [plantType, setPlantType] = useState('oak');
  const [result, setResult] = useState<number | null>(null);

  const calculateOffset = () => {
    const area = parseFloat(landArea);
    if (!isNaN(area) && area > 0) {
      const treesPerAcre = 100; // Average number of trees per acre
      const totalTrees = area * treesPerAcre;
      const annualOffset = totalTrees * PLANTS_DATA[plantType as keyof typeof PLANTS_DATA].co2PerYear;
      setResult(annualOffset);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-xl shadow-md p-8">
        <div className="flex items-center justify-center mb-8">
          <Tree className="h-12 w-12 text-green-600 mr-4" />
          <h1 className="text-3xl font-bold text-gray-900">
            Green Farm Calculator
          </h1>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Land Area (in acres)
            </label>
            <input
              type="number"
              value={landArea}
              onChange={(e) => setLandArea(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              placeholder="Enter land area"
              min="0"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Plant Type
            </label>
            <select
              value={plantType}
              onChange={(e) => setPlantType(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            >
              {Object.entries(PLANTS_DATA).map(([key, { name }]) => (
                <option key={key} value={key}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          <button
            onClick={calculateOffset}
            className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
          >
            Calculate Carbon Offset
          </button>

          {result !== null && (
            <div className="mt-8 p-6 bg-green-50 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Calculation Results
              </h2>
              <p className="text-gray-700">
                Your land can offset approximately{' '}
                <span className="font-bold text-green-600">
                  {result.toLocaleString()}
                </span>{' '}
                kg of CO₂ per year.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GreenFarm