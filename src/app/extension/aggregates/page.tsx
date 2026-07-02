import DemoTemplate from "../../components/DemoTemplate";

export default function AggregatesPage() {
  const media = [
    { 
      type: "image" as const, 
      src: "/demos/aggregates.jpg", 
      alt: "Aggregate stability test" 
    },

    { 
      type: "image" as const, 
      src: "/demos/aggregates1.jpeg", 
      alt: "Aggregate stability test" 
    },
  ];

  return (
    <DemoTemplate 
      title="Aggregate Stability" 
      backLink="/extension/gallery" 
      backText="Back to Soil Health Express"
      gallery={media}
      ctaText="Download Stability Guide (PDF)"
      ctaLink="#"
    >
      <p>
        Discover how different soil management practices influence the stability of soil aggregates when exposed to water.
      </p>
      <h3 className="text-2xl font-bold mt-8">Key Takeaways</h3>
      <ul>
        <li>Understand biological glues holding aggregates together.</li>
        <li>Observe the impact of tillage on structural stability.</li>
      </ul>
    </DemoTemplate>
  );
}