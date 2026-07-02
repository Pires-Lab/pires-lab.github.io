import DemoTemplate from "../../../components/DemoTemplate";

export default function BiologicalIndicatorsPage() {
  const media = [
    { type: "image" as const, src: "/soil-health/soil-life.jpg", alt: "Soil microbial life and organic matter" }
  ];

  return (
    <DemoTemplate 
      title="Biological Indicators" 
      backLink="/soil-health/indicators" 
      backText="Back to Indicators"
      gallery={media}
      ctaText="View Soil Life Resources"
      ctaLink="/extension/edumaterials"
    >
      <p>
        The biological component is the engine of soil health. It encompasses the vast network of organisms—from bacteria and fungi to earthworms—that drive nutrient cycling and aggregate formation.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Key Biological Indicators</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Soil Respiration:</strong> Measures the metabolic activity of the soil microbiome, reflecting carbon cycling.</li>
        <li><strong>Earthworm Populations:</strong> Serve as an indicator of soil structural health and organic matter processing.</li>
        <li><strong>Microbial Biomass:</strong> The total mass of living organisms in the soil, essential for nutrient turnover.</li>
      </ul>

      <h3 className="text-2xl font-bold mt-8 mb-4">The Soil Food Web</h3>
      <p>
        Maintaining biological diversity is key to creating a resilient soil ecosystem that can naturally suppress pathogens and enhance nutrient availability for plants.
      </p>
    </DemoTemplate>
  );
}