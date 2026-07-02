import DemoTemplate from "../../../components/DemoTemplate";

export default function PhysicalIndicatorsPage() {
  // Você pode adicionar fotos de testes de infiltração ou estrutura de solo aqui
  const media = [
    { type: "image" as const, src: "/soil-health/infiltration-test.jpg", alt: "Infiltration Test" }
  ];

  return (
    <DemoTemplate 
      title="Physical Indicators" 
      backLink="/soil-health/indicators" 
      backText="Back to Indicators"
      gallery={media}
      ctaText="View Field Measurement Guide"
      ctaLink="/extension/edumaterials"
    >
      <p>
        Physical indicators provide a snapshot of the soil's structure and its ability to function as a medium for water and air movement. 
        Healthy physical soil structure is the foundation that allows roots to grow and water to infiltrate efficiently.
      </p>

      <h3 className="text-2xl font-bold mt-8 mb-4">Key Indicators</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Aggregate Stability:</strong> Measures how well soil particles hold together under stress (like heavy rain).</li>
        <li><strong>Infiltration Rate:</strong> How quickly water enters the soil profile, indicating pore space and structure health.</li>
        <li><strong>Bulk Density:</strong> An indicator of soil compaction and the volume of pore space available for root penetration.</li>
      </ul>

      <h3 className="text-2xl font-bold mt-8 mb-4">Why it Matters</h3>
      <p>
        Compacted or poorly structured soils limit root depth, increase surface runoff (leading to erosion), and reduce the overall resilience of the crop to drought conditions.
      </p>
    </DemoTemplate>
  );
}