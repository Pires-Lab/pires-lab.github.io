import Link from "next/link";

export const metadata = {
  title: "Soil Health Indicators - Pires Lab",
  description: "Explore the physical, chemical, and biological indicators used to assess soil health.",
};

export default function SoilHealthIndicators() {
  const indicators = [
    {
      title: "Physical Indicators",
      description: "Assess soil structure, porosity, and water dynamics.",
      icon: "💧",
      link: "/soil-health/indicators/physical"
    },
    {
      title: "Chemical Indicators",
      description: "Evaluate soil fertility, pH, and nutrient availability.",
      icon: "🧪",
      link: "/soil-health/indicators/chemical"
    },
    {
      title: "Biological Indicators",
      description: "Examine microbial activity, carbon, and living components.",
      icon: "🦠",
      link: "/soil-health/indicators/biological"
    }
  ];

  return (
    <div className="py-16 bg-[#fdfbf7] min-h-screen">
      <div className="container-custom">
        
        <Link href="/soil-health" className="text-ndsu-gold font-bold mb-4 inline-block hover:underline">
          ← Back to Soil Health
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4 text-[#042117]">Soil Health Indicators</h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            To manage soil health, you must first measure it. Explore our framework for assessing soil performance through its physical, chemical, and biological properties.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {indicators.map((ind) => (
            <div key={ind.title} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col items-center text-center transition-transform hover:-translate-y-2 hover:shadow-lg">
              <div className="text-6xl mb-6">{ind.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-[#042117]">{ind.title}</h3>
              <p className="text-gray-600 mb-8 flex-1">{ind.description}</p>
              <Link 
                href={ind.link} 
                className="bg-[#042117] text-white px-6 py-2 rounded-full font-bold hover:bg-ndsu-sage transition-colors"
              >
                Explore {ind.title.split(' ')[0]}
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}