import { teamData } from "@/lib/info_helper.server";
import Image from "next/image";

export const metadata = {
  title: "Pires Lab - Team",
  description:
    "Meet the researchers, students, and collaborators of the Pires Lab.",
};

export default function Team() {
  const currentTeam = teamData.filter((member) => {
  const group = String(member.group ?? "").trim().toLowerCase();
  return group !== "alumni";
});

const alumniTeam = teamData.filter((member) => {
  const group = String(member.group ?? "").trim().toLowerCase();
  return group === "alumni";
});

  const renderMemberCard = (member: (typeof teamData)[number]) => (
    <div
      key={member.id}
      className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-transform hover:-translate-y-1 flex flex-col h-full"
    >
      <div className="relative w-full aspect-square sm:aspect-[4/5] lg:h-81 bg-purdue-secondary-gray2">
        <Image
          src={`/pfp/${member.pfp_file_name}`}
          alt={member.name}
          fill
          priority
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 288px"
        />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-1">{member.name}</h3>

          <p className="text-purdue-rush font-semibold mb-3">
            {member.role}
          </p>

          <p className="text-gray-700 leading-relaxed">
            {member.research_info}
          </p>
        </div>

        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-purdue-rush hover:underline font-heading font-bold mt-auto pt-4"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn Profile
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Our Team</h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Meet the researchers, students, and collaborators working in the
            Pires Lab on soil health, cover crops, nutrient cycling, and
            sustainable cropping systems.
          </p>
        </div>

        {/* Current Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-white">Current Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-purdue-black">
            {currentTeam.map((member) => renderMemberCard(member))}
          </div>
        </div>

        {/* Alumni */}
        {alumniTeam.length > 0 && (
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-white">Alumni</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-purdue-black">
              {alumniTeam.map((member) => renderMemberCard(member))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}