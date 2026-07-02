import Link from "next/link";
import Image from "next/image";
import { projects } from "./data";

// old projects page. Deactivaded, working as a backup if needed 

export const metadata = {
  title: "Projects - Pires Lab",
  description:
    "Research projects from the Pires Lab focused on soil health, cover crops, and sustainable cropping systems.",
};

export default function Projects() {
  return (
    <div className="py-16">
      <div className="container-custom">
        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Research Projects
          </h1>
          <p className="text-lg text-white/90 max-w-3xl">
            Explore research projects from the Pires Lab related to soil health,
            cover crops, nutrient cycling, residue management, and resilient
            cropping systems.
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-lab-deep">
            <h2 className="text-2xl font-bold mb-3">Projects coming soon</h2>
            <p className="text-gray-700 leading-relaxed">
              We are currently updating this page with research projects from the
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
    </div>
  );
}