import DemoTemplate from "../../../components/DemoTemplate";

export default function ChemicalIndicatorsPage() {
  const media = [
    { type: "image" as const, src: "/soil-health/ph-test.jpg", alt: "Soil pH and nutrient testing" }
  ];

  return (
    <DemoTemplate 
      title="Chemical Indicators" 
      backLink="/soil-health/indicators" 
      backText="Back to Indicators"
      gallery={media}
      ctaText="View Nutrient Management Guide"
      ctaLink="/extension/edumaterials"
    >
      <p>
        Chemical indicators reflect the {'soil\'s'} nutrient status and its ability to provide the essential environment for plant growth. 
        These metrics are critical for optimizing fertilizer use and maintaining long-term land productivity.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Core Chemical Metrics</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Soil pH:</strong> The master variable that influences nutrient solubility and microbial activity.</li>
        <li><strong>Cation Exchange Capacity (CEC):</strong> An indicator of the {'soil\'s'} potential to hold and supply nutrients.</li>
        <li><strong>Organic Matter Content:</strong> The primary reservoir for nitrogen, phosphorus, and sulfur.</li>
      </ul>

      <h3 className="text-2xl font-bold mt-8 mb-4">Application</h3>
      <p>
        By monitoring these levels, producers can tailor their nutrient management programs to meet specific crop demands while minimizing environmental runoff.
      </p>
    </DemoTemplate>
  );
}