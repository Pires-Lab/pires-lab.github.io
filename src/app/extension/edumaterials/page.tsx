import DemoTemplate from "../../components/DemoTemplate";

export default function EduMaterialsPage() {
  const media = [
    { 
      type: "image" as const, 
      src: "/demos/dashboard.jpg",
      alt: "Soil Health Principles" 
    },
    {
      type: "image" as const,
      src: "/demos/dashboard1.jpg",
      alt: "Educational Materials"
    },
  ];

  return (
    <DemoTemplate
      title="Educational Materials"
      backLink="/extension/gallery"
      backText="Back to Soil Health Express"
      gallery={media} // <--- ADICIONEI ISSO AQUI!
    >
      <p>
        The Pires Lab is committed to translating robust scientific research into accessible, field-ready information. Here you will find our collection of educational banners, factsheets, and visual guides used during our extension events and field days.
      </p>
      <h3 className="text-2xl font-bold mt-8 mb-4">Available Resources</h3>
      <p className="mb-4">
        These materials are designed for farmers, agronomists, and students to quickly grasp core soil health concepts. Topics include:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Crop Roots</li>
        <li>The Principles of Soil Health</li>
        <li>Soil Health Journey</li>
        <li>Soil Health Holy Trinity</li>
        <li>Roots are Important for Carbon Storage</li>
      </ul>
      <p className="mt-6 italic text-gray-500">
        (Note: Downloadable PDFs and high-resolution banners will be added to this section soon.)
      </p>
    </DemoTemplate>
  );
}