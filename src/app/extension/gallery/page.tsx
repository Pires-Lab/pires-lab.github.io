"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { photos } from "./gallery-data"; 

export default function SoilHealthExpressPage() {
  const [index, setIndex] = useState(-1);

  // Array containing the demonstrations data
  const demonstrations = [
    {
      title: "Rainfall Simulator",
      description: "Observe how different soil management practices impact water infiltration, runoff, and erosion during simulated rainfall events.",
      image: "/demos/rainfall3.jpeg", // Replace with your actual image path
      ctaText: "Watch in Action",
      ctaLink: "/extension/rainfall" // Add the link to the specific page or video
    },
    {
      title: "Wind Erosion Simulator",
      description: "See the direct effects of wind on various soil surfaces and learn how cover crops and surface residue protect the topsoil.",
      image: "/demos/wind.jpeg", // Replace with your actual image path
      ctaText: "Learn More",
      ctaLink: "/extension/winderosion"
    },
    {
      title: "Cover Crop Roots",
      description: "Explore our display boards showing the diverse root systems of different cover crops and their role in improving soil health.",
      image: "/demos/roots.jpeg", // Replace with your actual image path
      ctaText: "Explore Roots",
      ctaLink: "/extension/rootspanel"
    },
    {
      title: "Aggregate Stability",
      description: "Discover how different soil management practices influence the stability of soil aggregates.",
      image: "/demos/aggregates.jpg", // Replace with your actual image path
      ctaText: "Take a Look",
      ctaLink: "/extension/aggregates"
    },
    {
      title: "Earthworm Activity",
      description: "Observe the nature's engineers at work. Learn how earthworms improve soil structure, aeration, and nutrient cycling within the soil profile.",
      image: "/demos/worms.jpg", // Replace with your actual image path
      ctaText: "Unearth the Secrets",
      ctaLink: "/extension/worms"
    },
    {
      title: "Educational Materials",
      description: "Access our collection of field-ready educational materials.",
      image: "/demos/dashboard.jpg", // Replace with your actual image path
      ctaText: "Browse All Materials",
      ctaLink: "/extension/edumaterials"
    }

  ];

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container-custom">
        {/* Main Title */}
        <div className="mb-16 border-b border-gray-200 pb-8 text-center">
          <h1 className="text-4xl font-bold mb-4 text-[#042117]">Soil Health Express</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bringing soil science to the field through interactive demonstrations and hands-on learning experiences.
          </p>
        </div>

        {/* Demonstrations Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-[#042117]">Interactive Demonstrations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demonstrations.map((demo, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-md"
              >
                {/* Image Container */}
                <div className="h-56 w-full bg-gray-200 relative">
                  <img 
                    src={demo.image} 
                    alt={demo.title} 
                    className="w-full h-full object-cover"
                    // Fallback to a gray block if the image is missing while you are testing
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20preserveAspectRatio%3D%22none%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23e5e7eb%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%2250%25%22%20fill%3D%22%239ca3af%22%20font-family%3D%22sans-serif%22%20font-size%3D%2224%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%3EImage%20Placeholder%3C%2Ftext%3E%3C%2Fsvg%3E";
                    }}
                  />
                </div>
                
                {/* Content Container */}
                <div className="p-8 flex flex-col flex-1 text-center items-center">
                  <h3 className="text-2xl font-bold mb-4 text-[#042117]">{demo.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-8 flex-1">
                    {demo.description}
                  </p>
                  
                  {/* Call to Action Button */}
                  <a 
                    href={demo.ctaLink} 
                    className="mt-auto inline-block bg-[#042117] text-white font-bold py-3 px-8 rounded-full hover:bg-ndsu-sage hover:text-[#042117] transition-all shadow-sm"
                  >
                    {demo.ctaText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-[#042117]">Event Gallery</h2>
          
          {/* Simple Grid Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((photo, i) => (
              <div 
                key={i} 
                className="aspect-square cursor-pointer overflow-hidden rounded-lg bg-gray-200 border border-gray-300"
                onClick={() => setIndex(i)}
              >
                <img 
                  src={photo.src} 
                  alt={`Event photo ${i + 1}`} 
                  className="w-full h-full object-cover hover:opacity-80 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Component */}
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={photos}
        />
      </div>
    </div>
  );
}