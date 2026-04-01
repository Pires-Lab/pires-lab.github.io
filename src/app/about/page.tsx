import Link from "next/link";

export const metadata = {
  title: "Pires Lab - About",
  description:
    "Mission and research focus of the Pires Lab.",
};

export default function About() {
  return (
    <div className="py-16">
      <div className="container-custom">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">About Our Lab</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            The Pires Lab studies soil health, cover crops, nutrient cycling,
            and resilient cropping systems to support more sustainable
            agriculture.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20 max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
          <p className="text-white/90 text-lg mb-4 leading-relaxed">
            Our mission is to advance agricultural sustainability through
            research that improves soil function, crop performance, and system
            resilience. We are interested in how management practices influence
            soil health and long-term productivity across cropping systems.
          </p>
          <p className="text-white/90 text-lg mb-4 leading-relaxed">
            Our work integrates field research, data analysis, and applied
            agronomy to better understand nutrient dynamics, residue
            management, cover crop performance, and the biological and physical
            processes that drive healthy soils.
          </p>
          <p className="text-white/90 text-lg leading-relaxed">
            We are also committed to training students and building research
            that is useful to farmers, researchers, and agricultural
            professionals.
          </p>
        </div>

        {/* Research Focus Areas */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-white">
            Research Focus Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-lab-deep">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-ndsu-sage">
              <h3 className="text-xl font-bold mb-4">Soil Health</h3>
              <p className="text-gray-700 leading-relaxed">
                We study how agricultural management affects soil biological,
                chemical, and physical properties linked to productivity and
                sustainability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-ndsu-sage">
              <h3 className="text-xl font-bold mb-4">Cover Crops</h3>
              <p className="text-gray-700 leading-relaxed">
                Our research evaluates cover crop establishment, performance,
                and their role in improving soil protection, nutrient cycling,
                and system resilience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-ndsu-sage">
              <h3 className="text-xl font-bold mb-4">Cropping Systems</h3>
              <p className="text-gray-700 leading-relaxed">
                We investigate management strategies that support resilient and
                efficient cropping systems under real field conditions.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-[#041a12]/85 backdrop-blur-sm text-white p-8 md:p-12 rounded-xl text-center border border-[#7fa66a]/40">
          <h2 className="text-3xl font-bold mb-4">
            Interested in Collaborating?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            We welcome research collaborations, student interest, and
            opportunities to connect with others working in soil health and
            sustainable agriculture.
          </p>
          <Link href="/team" className="btn-primary">
            Meet the Team
          </Link>
        </div>
      </div>
    </div>
  );
}