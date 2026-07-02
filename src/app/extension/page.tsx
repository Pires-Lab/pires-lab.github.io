import Image from "next/image";
import Link from "next/link";

export default function Extension() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-12 text-[#042117]">Extension & Outreach</h1>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Caixa 1: Fact Sheets */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold mb-6 text-[#042117]">Fact Sheets & Resources</h2>
            <ul className="space-y-4">
               <li><a href="#" className="text-ndsu-sage hover:underline">Download: Cover crops management (PDF)</a></li>
               <li><a href="#" className="text-ndsu-sage hover:underline">Download: Soil sampling theories (PDF)</a></li>
            </ul>
          </div>

          {/* Caixa 2: Soil Health Express Trailer */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[#042117]">Soil Health Express</h2>
            
            <div className="relative w-full h-48 bg-gray-200 rounded-lg mb-4 overflow-hidden">
               <Image 
                 src="/soil-health/trailer.jpeg" 
                 alt="Soil Health Express Trailer" 
                 fill 
                 className="object-cover"
                style={{ objectPosition: '50% 53%' }} // first one is horizontal, second one is vertical 
                priority 
               />
            </div>
            
            <p className="text-gray-700 mb-6">
              Our laboratory on wheels! The Soil Health Express brings hands-on demonstrations of soil physics and biology directly to the field.
            </p>
            
            <Link href="/extension/gallery" className="inline-block bg-[#042117] text-white px-6 py-2 rounded-lg font-bold hover:bg-ndsu-sage transition-colors">
              Explore Soil Health Express 
            </Link>
          </div>

        </div>

       
      </div>
    </div>
  );
}