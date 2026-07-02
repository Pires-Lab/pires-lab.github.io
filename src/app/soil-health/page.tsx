import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Soil Health - Pires Lab",
  description: "Exploring the foundational elements of soil health and their application in diverse agricultural systems.",
};

export default function SoilHealth() {
  return (
    <div className="bg-[#fdfbf7] min-h-screen pt-16 pb-24">
      <div className="container-custom">
        
        {/* Cabeçalho */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-4 text-[#042117]">Soil Health Principles & Practice</h1>
          <p className="text-lg text-gray-700 max-w-3xl">
            Exploring the foundational elements of soil health and their application in diverse agricultural systems.
          </p>
        </div>

        {/* Banner */}
        <div className="w-full h-48 md:h-64 bg-[#e8e4db] rounded-xl mb-12 relative overflow-hidden border border-[#d1ccbf] flex items-center justify-center">
          <Image 
            src="/soil-health/no-till.jpeg" 
            alt="Perfil de solo em sistema de plantio direto"
            fill
            className="object-cover"
            style={{ objectPosition: '50% 45%' }} 
            priority
          />
        </div>

        {/* Grid de Princípios */}
        <div className="grid md:grid-cols-2 gap-6">
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-6 transition-transform hover:-translate-y-1">
            <div className="text-4xl shrink-0">🚜</div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#042117]">Minimize Disturbance</h3>
              <p className="text-gray-600 leading-relaxed">
                Reduce physical, chemical, and biological disturbance to protect soil structure and maintain aggregate stability.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-6 transition-transform hover:-translate-y-1">
            <div className="text-4xl shrink-0">🌿</div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#042117]">Maximize Diversity</h3>
              <p className="text-gray-600 leading-relaxed">
                Incorporate mixed plant species and diverse crop rotations to stimulate varied soil microbial communities.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-6 transition-transform hover:-translate-y-1">
            <div className="text-4xl shrink-0">🌱</div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#042117]">Maintain Living Roots</h3>
              <p className="text-gray-600 leading-relaxed">
                Keep living roots in the soil year-round to provide a continuous food source for soil organisms.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-6 transition-transform hover:-translate-y-1">
            <div className="text-4xl shrink-0">🛡️</div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-[#042117]">Keep Soil Covered</h3>
              <p className="text-gray-600 leading-relaxed">
                Use cover crops and manage crop residues to protect the soil surface from erosion and temperature extremes.
              </p>
            </div>
          </div>
        </div>

        {/* Container Integrado de Ações */}
        <div className="mt-20 space-y-6">
          
          {/* Bloco de Destaque para Cover Crops */}
          <div className="bg-[#042117] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Interested in Cover Crops?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
              Explore our database of cover crop species, including detailed agronomic information, 
              planting windows, and stress tolerance data to optimize your soil management.
            </p>
            <Link 
              href="/cover-crops" 
              className="inline-block bg-ndsu-gold text-[#042117] font-bold py-3 px-8 rounded-lg hover:bg-white transition-colors text-lg"
            >
              Explore Cover Crops Database
            </Link>
          </div>

          {/* Bloco Soil Health Indicators */}
          <div className="bg-[#0f382a] text-white p-8 md:p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between shadow-lg border border-[#1a5542]">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">Have You Ever Heard About Soil Health Indicators?</h3>
              <p className="text-gray-200">Understand the physical, chemical, and biological measures of soil performance.</p>
            </div>
            <Link 
              href="/soil-health/indicators" 
              className="mt-6 md:mt-0 bg-ndsu-gold text-[#042117] px-8 py-3 rounded-full font-bold hover:bg-white transition-colors whitespace-nowrap"
            >
              Learn More
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
}