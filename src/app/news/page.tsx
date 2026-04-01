export const metadata = {
  title: "Pires Lab - News",
  description: "News and updates from the Pires Lab.",
};

export default function NewsPage() {
  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">News</h1>
          <p className="text-lg text-white/95 max-w-3xl mx-auto">
            Updates and news from the Pires Lab will be posted here.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-lab-deep max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-3">News coming soon</h2>
          <p className="text-gray-700 leading-relaxed">
            We are currently updating this section. Please check back soon for
            announcements, lab updates, and research highlights.
          </p>
        </div>
      </div>
    </div>
  );
}