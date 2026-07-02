import DemoTemplate from "../../components/DemoTemplate";

export default function RootsPanelPage() {
  const media = [
  { 
    type: "image" as const, 
    src: "/demos/roots3.jpg",
    alt: "Cover crop root systems" 
  },
  
  {
    type: "image" as const,
    src: "/demos/roots2.jpg",
    alt: "Cover crop roots presentation"
   }, 

   {
    type: "image" as const,
    src: "/demos/roots4.jpeg",
    alt: "Cover crop roots presentation"
   },

   {
    type: "image" as const,
    src: "/demos/roots5.jpeg",
    alt: "Cover crop roots presentation"
   },

   {
    type: "image" as const,
    src: "/demos/roots7.jpeg",
    alt: "Cover crop roots presentation"
   },

  ];

  return (
    <DemoTemplate 
      title="Cover Crop Roots" 
      backLink="/extension/gallery" 
      backText="Back to Soil Health Express"
      gallery={media}
    >
      <p>
        Explore our display boards showing the diverse root systems of different cover crops and their role in improving soil health.
      </p>
      <h3 className="text-2xl font-bold mt-8">Key Takeaways</h3>
      <ul>
        <li>Compare fibrous versus taproot structures.</li>
        <li>Learn how roots alleviate soil compaction.</li>
      </ul>
    </DemoTemplate>
  );
}