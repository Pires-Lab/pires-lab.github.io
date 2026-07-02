"use client";

import { useState } from "react";

// 1. Definimos a estrutura exata dos dados da planta para o TypeScript
interface CoverCrop {
  id: string;
  name: string;
  scientificName: string;
  type: string;
  growthHabit: string;
  description: string[];
  benefits: string[];
  planting: Record<string, string | number>;
  stress: Record<string, string | number>;
}

// 2. Trocamos o unknown[] por CoverCrop[]
export default function CoverCropsClient({ coverCropsData }: { coverCropsData: CoverCrop[] }) {
  const [selectedCropId, setSelectedCropId] = useState(coverCropsData[0]?.id);
  const [activeTab, setActiveTab] = useState("planting");

  const selectedCrop = coverCropsData.find((crop) => crop.id === selectedCropId);

  if (!selectedCrop) return <div>Loading...</div>;

  return (
    <div className="bg-[#fdfbf7] min-h-screen py-12">
      <div className="container-custom">
        {/* Title */}
        <div className="mb-10 border-b border-gray-200 pb-6">
          <h1 className="text-4xl font-bold text-[#042117] mb-2">Cover Crops Database</h1>
          <p className="text-gray-600 text-lg">Explore detailed agronomic information and management practices.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Menu */}
          <div className="w-full md:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden sticky top-24">
              <div className="bg-[#042117] text-white p-4 font-bold font-heading">
                Select a Crop
              </div>
              <ul className="divide-y divide-gray-100">
                {coverCropsData.map((crop) => (
                  <li key={crop.id}>
                    <button
                      onClick={() => {
                        setSelectedCropId(crop.id);
                        setActiveTab("planting");
                      }}
                      className={`w-full text-left px-4 py-3 transition-colors ${
                        selectedCropId === crop.id
                          ? "bg-ndsu-sage/10 text-[#042117] border-l-4 border-ndsu-sage font-bold"
                          : "text-gray-600 hover:bg-gray-50 border-l-4 border-transparent"
                      }`}
                    >
                      {crop.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full md:w-3/4">
            {/* Header */}
            <div className="mb-8 bg-[#042117] p-8 rounded-xl shadow-md border border-[#042117]">
              <h2 className="text-3xl font-bold text-white mb-1">{selectedCrop.name}</h2>
              <h3 className="text-xl italic text-gray-300 mb-6">{selectedCrop.scientificName}</h3>
              <div className="flex flex-wrap gap-3 font-heading text-sm">
                <span className="bg-[#fdfbf7] text-[#042117] px-4 py-1.5 rounded-full font-bold shadow-sm">
                  {selectedCrop.type}
                </span>
                <span className="bg-ndsu-gold text-[#042117] px-4 py-1.5 rounded-full font-bold shadow-sm">
                  {selectedCrop.growthHabit} Growth
                </span>
              </div>
            </div>

            {/* Description & Benefits */}
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h4 className="text-xl font-bold mb-4 border-b pb-2 text-[#042117]">Description</h4>
                <div className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                  {selectedCrop.description.map((desc: string, idx: number) => (
                    <p key={idx}>{desc}</p>
                  ))}
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 border-t-4 border-t-ndsu-sage">
                <h4 className="text-xl font-bold mb-4 text-[#042117]">Main Benefits</h4>
                <ul className="space-y-2 text-sm md:text-base">
                  {selectedCrop.benefits.map((benefit: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-ndsu-sage mt-1 font-bold">✓</span>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="flex overflow-x-auto border-b border-gray-200 bg-gray-100 scrollbar-hide">
                <button
                  onClick={() => setActiveTab("planting")}
                  className={`px-8 py-4 font-bold whitespace-nowrap transition-colors ${
                    activeTab === "planting" ? "bg-[#042117] text-white shadow-inner" : "text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  Planting Info
                </button>
                <button
                  onClick={() => setActiveTab("stress")}
                  className={`px-8 py-4 font-bold whitespace-nowrap transition-colors ${
                    activeTab === "stress" ? "bg-[#042117] text-white shadow-inner" : "text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  Stress Tolerance
                </button>
              </div>
              <div className="p-6 md:p-8">
                {activeTab === "planting" && (
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm md:text-base">
                    {Object.entries(selectedCrop.planting).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-dashed border-gray-300">
                        <span className="font-medium text-gray-600 capitalize">{key.replace('rate', ' Rate')}</span>
                        <span className="font-bold text-[#042117] text-right">{String(value)}</span>
                      </div>
                    ))}
                  </div>
                )}
                {activeTab === "stress" && (
                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm md:text-base">
                    {Object.entries(selectedCrop.stress).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-dashed border-gray-300">
                        <span className="font-medium text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                        <span className="font-bold text-[#042117] text-right">{String(value)}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}