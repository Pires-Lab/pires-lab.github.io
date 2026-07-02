import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Pires Lab - Home",
  description:
    "Research on soil health, cover crops, nutrient cycling, and sustainable cropping systems.",
};

export default function Home() {
  return (
    <>
       {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-5 max-w-2xl">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                Pires Lab
              </h1>

              <h2 className="text-3xl md:text-5xl leading-tight text-white">
                <span className="text-[#c8dd9b] font-bold">Soil Health</span>{" "}
                and{" "}
                <span className="text-[#c8dd9b] font-bold">Cover Crop</span>{" "}
                Research
              </h2>

              <p className="text-lg md:text-xl text-white/95 max-w-xl leading-relaxed">
                Advancing agricultural sustainability through research on soil
                health, cover crops, nutrient cycling, and resilient cropping
                systems in the Northern Great Plains and beyond.
              </p>

              <div className="pt-3 flex flex-wrap gap-4">
                <Link href="/research" className="btn-primary">
                  Our Research
                </Link>
                <Link href="/team" className="btn-secondary">
                  Meet the Team
                </Link>
              </div>
            </div>

            <div className="hidden md:flex justify-center">
              <div className="relative w-[300px] h-[300px] lg:w-[360px] lg:h-[360px]">
                <div className="absolute inset-0 rounded-full bg-[#7fa66a]/10 blur-3xl" />
                <Image
                  src="/lab-logo.png"
                  alt="Pires Lab logo"
                  fill
                  className="object-contain relative z-10"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              What We Study
            </h2>
            <p className="text-lg text-white/90 leading-relaxed">
              Our lab investigates how management practices influence soil
              health, nutrient dynamics, crop performance, and agricultural
              sustainability. We are especially interested in cover crops,
              residue management, and resilient production systems.
            </p>
          </div>


          <div className="grid md:grid-cols-3 gap-8 text-lab-deep">
            <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 flex flex-col h-full">
              <h3 className="text-xl font-bold mb-3">Research</h3>
              <p className="text-gray-700 leading-relaxed">
                Learn more about our work on soil processes, cover crops, 
                nutrient cycling, and sustainable cropping systems.
              </p>
              <Link
                href="/research"
                className="mt-auto pt-4 text-lab-sage hover:text-ndsu-gold font-medium transition-colors"
              >
                Explore Research
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 flex flex-col h-full">
              <h3 className="text-xl font-bold mb-3">Projects</h3>
              <p className="text-gray-700 leading-relaxed">
                See current and past research projects, collaborations, and
                scientific outputs from the lab.
              </p>
              <Link
                href="/projects"
                className="mt-auto pt-4 text-lab-sage hover:text-ndsu-gold font-medium transition-colors"
              >
                View Projects
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6 flex flex-col h-full">
              <h3 className="text-xl font-bold mb-3">Team</h3>
              <p className="text-gray-700 leading-relaxed">
                Meet the people behind the lab, including faculty, students, and
                collaborators.
              </p>
              <Link
                href="/team"
                 className="mt-auto pt-4 text-lab-sage hover:text-ndsu-gold font-medium transition-colors"
              >
                Meet the Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
