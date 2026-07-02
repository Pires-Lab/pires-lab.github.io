import DemoTemplate from "../../components/DemoTemplate";

export default function WormsPage() {
  return (
    <DemoTemplate
      title="Earthworm Activity"
      imageSrc="/demos/worms.jpg"
      backLink="/extension/gallery" // O caminho da sua página principal
      backText="Back to Soil Health Express"    // O texto que vai aparecer
    >
      <p>
        Earthworms are the quintessential "engineers" of the soil ecosystem. Our terrarium demonstration offers a cross-sectional view of earthworm activity, highlighting their crucial role in breaking down organic matter and structuring the soil.
      </p>
      <h3 className="text-2xl font-bold mt-8 mb-4">Key Takeaways</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Macropore Creation:</strong> Watch how earthworms burrow through the soil, creating large channels (macropores) that drastically improve water infiltration and aeration.</li>
        <li><strong>Nutrient Cycling:</strong> Understand how worms consume crop residue and excrete nutrient-rich casts, making minerals more readily available to plants.</li>
        <li><strong>Sensitivity to Disturbance:</strong> Learn why earthworm populations are an excellent biological indicator of soil health and how they thrive in reduced-tillage systems.</li>
      </ul>
    </DemoTemplate>
  );
}