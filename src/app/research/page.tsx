import Link from "next/link";
import Image from "next/image";
// Importando os dados da pasta projects para não quebrar a estrutura do seu site
import { projects } from "../projects/data";

export const metadata = {
  title: "Research & Projects - Pires Lab",
  description:
    "Research areas, projects, and publications from the Pires Lab focused on soil health, cover crops, and sustainable cropping systems.",
};

export default function ResearchAndProjects() {
  return (
    <div className="py-16">
      <div className="container-custom">
        {/* Page Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Research & Projects
          </h1>
          <p className="text-lg text-white/95 max-w-3xl mx-auto">
            Our combined focus on soil health, cover crops, nutrient cycling,
            and residue management drives both fundamental research and applied 
            projects that support sustainable agriculture.
          </p>
        </div>

        {/* 1. Research Areas Overview */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-center text-white">
            Research Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-lab-deep">
            {/* Card 1 */}
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

            {/* Card 2 */}
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

            {/* Card 3 */}
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

        {/* 2. Active Projects Grid */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-center text-white">
            Active Projects
          </h2>
          
          {projects.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-lab-deep text-center">
              <h3 className="text-2xl font-bold mb-3">Projects coming soon</h3>
              <p className="text-gray-700 leading-relaxed">
                We are currently updating this section with research projects from the
                Pires Lab. Please check back soon.
              </p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8 text-lab-deep">
              {projects.map((project) => (
                <div
                  key={project.slug}
                  className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 transition-all hover:shadow-md hover:border-gray-300"
                >
                  <div className="h-40 bg-gray-100 relative">
                    {project.heroImage && (
                      <Image
                        src={project.heroImage}
                        alt={project.title}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}
                    <div className="absolute top-3 left-3">
                      <span className="bg-ndsu-gold px-2 py-1 text-xs font-bold text-lab-deep rounded font-heading">
                        {project.venue.short}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {project.title}
                    </h2>

                    <div className="mb-3">
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {project.authors.map((author, index) => (
                          <span key={index}>
                            <span className="font-medium">{author.name}</span>
                            <sup className="text-gray-500 ml-0.5">{author.sup}</sup>
                            {index < project.authors.length - 1 && (
                              <span className="text-gray-400 mx-1">•</span>
                            )}
                          </span>
                        ))}
                      </p>

                      {project.affiliations?.[0]?.name && (
                        <p className="text-sm text-gray-600 italic mt-1">
                          <sup className="text-gray-500 mr-1">1</sup>
                          {project.affiliations[0].name}
                        </p>
                      )}
                    </div>

                    <p className="text-base text-gray-700 mb-4 leading-relaxed line-clamp-3">
                      {project.abstract}
                    </p>

                    <div className="pt-2 border-t border-gray-100">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center text-ndsu-sage hover:text-ndsu-sage/80 font-medium text-sm transition-colors"
                      >
                        View Project
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 3. Collaboration CTA */}
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

        {/* 4. Publications */}
        <div id="publications" className="scroll-mt-16">
          <h2 className="text-3xl font-bold mb-10 text-white">Publications</h2>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-lab-deep text-center">
            <h3 className="text-2xl font-bold mb-3">Publications coming soon</h3>
            <p className="text-gray-700 leading-relaxed">
              We are currently updating this section with publications from the
              Pires Lab. Please check back soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}