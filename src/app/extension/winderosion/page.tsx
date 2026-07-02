import DemoTemplate from "../../components/DemoTemplate";

export default function WindErosionPage() {
  const media = [
    { 
      type: "image" as const,
      src: "/demos/wind.jpeg", 
      alt: "Wind erosion simulator" 
    }
  ];

  return (
    <DemoTemplate 
      title="Wind Erosion Simulator" 
      backLink="/extension/gallery" 
      backText="Back to Soil Health Express"
      gallery={media}
      ctaText="Download Erosion Guide (PDF)"
      ctaLink="#"
    >
      <p>
        See the direct effects of wind on various soil surfaces and learn how cover crops and surface residue protect the topsoil.
      </p>
      <h3 className="text-2xl font-bold mt-8">Key Takeaways</h3>
      <ul>
        <li>Observe protection provided by surface residue.</li>
        <li>Understand how wind velocity affects soil displacement.</li>
      </ul>
    </DemoTemplate>
  );
}