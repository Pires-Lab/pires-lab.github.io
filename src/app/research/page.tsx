import Link from "next/link";

export const metadata = {
  title: "Pires Lab - Research",
  description:
    "Research areas and publications from the Pires Lab focused on soil health, cover crops, and sustainable cropping systems.",
};

export default function Research() {
  return (
    <div className="py-16">
      <div className="container-custom">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Our Research</h1>
          <p className="text-lg text-white/95 max-w-3xl mx-auto">
            Our research focuses on soil health, cover crops, nutrient cycling,
            residue management, and resilient cropping systems that support
            sustainable agriculture.
          </p>
        </div>

        {/* Research Areas Overview */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-center text-white">
            Research Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-lab-deep">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-ndsu-sage flex flex-col">
              <h3 className="text-xl font-bold mb-4 min-h-[3.5rem]">
                Soil Health
              </h3>
              <div className="flex-grow">
                <p className="text-gray-700">
                  We study how agricultural management influences soil
                  biological, chemical, and physical properties related to
                  productivity, resilience, and long-term sustainability.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-ndsu-sage flex flex-col">
              <h3 className="text-xl font-bold mb-4 min-h-[3.5rem]">
                Cover Crops
              </h3>
              <div className="flex-grow">
                <p className="text-gray-700">
                  Our work evaluates cover crop establishment, biomass
                  production, weed suppression, soil protection, and their role
                  in improving system performance.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-ndsu-sage flex flex-col">
              <h3 className="text-xl font-bold mb-4 min-h-[3.5rem]">
                Nutrient Cycling and Cropping Systems
              </h3>
              <div className="flex-grow">
                <p className="text-gray-700">
                  We investigate nutrient dynamics, residue management, and
                  management strategies that support efficient and resilient
                  cropping systems under field conditions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration CTA */}
        <div className="bg-[#041a12]/85 backdrop-blur-sm text-white p-8 md:p-12 rounded-xl text-center border border-[#7fa66a]/40 mb-16">
          <h2 className="text-3xl font-bold mb-4">Research Collaboration</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            We welcome collaboration with students, researchers, and partners
            interested in soil health, cover crops, and sustainable agriculture.
          </p>
          <Link href="/team" className="btn-primary">
            Meet Our Team
          </Link>
        </div>

        {/* Publications */}
        <div id="publications" className="scroll-mt-16">
          <h2 className="text-3xl font-bold mb-10 text-white">Publications</h2>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-lab-deep">
            <h3 className="text-2xl font-bold mb-3">Publications coming soon</h3>
            <p className="text-gray-700 leading-relaxed">
              We are currently updating this page with publications from the
              Pires Lab. Please check back soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}