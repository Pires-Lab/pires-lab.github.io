import DemoTemplate from "../../components/DemoTemplate";

export default function RainfallPage() {
  // 1. Crie a lista de fotos e vídeos específicos dessa demonstração
  const rainfallMedia = [
    { 
      type: "image" as const, 
      src: "/demos/rainfall4.jpg", 
      alt: "rainfall simulator" 
    },
    { 
      type: "image" as const, 
      src: "/demos/rainfall3.jpeg", 
      alt: "rainfall simulator" 
    },
    { 
      type: "image" as const, 
      src: "/demos/rainfall5.jpg", 
      alt: "Comparison of runoff water clarity between tillage types" 
    },
    { 
      type: "image" as const, 
      src: "/demos/rainfall.png", // Foto do simulador rodando no campo
      alt: "Cattle watching the rainfall simulatior presentation" 
    },
    { 
      type: "image" as const, 
      src: "/demos/indoor_rainfall.jpg", 
      alt: "Indoor rainfall demo" 
    },
    { 
      type: "video" as const, 
      src: "https://www.youtube.com/embed/SEU_ID_DO_VIDEO", // Substitua pelo ID do seu vídeo no YouTube
      alt: "Video explanation of rainfall infiltration rates" 
    }
  ];

  return (
    <DemoTemplate 
      title="Rainfall Simulator" 
      backLink="/extension/gallery" // Altere para a rota exata da sua galeria principal se necessário
      backText="Back to Soil Health Express"
      gallery={rainfallMedia} // 2. Passe a galeria aqui!
      ctaText="Download Field Guide (PDF)"
      ctaLink="#"
    >
      <p>
        Observe how different soil management practices impact water infiltration, runoff, and erosion during simulated rainfall events.
      </p>
      <h3 className="text-2xl font-bold mt-8">Key Takeaways</h3>
      <ul>
        <li>Observation of runoff patterns.</li>
        <li>Infiltration differences between tillage systems.</li>
      </ul>
    </DemoTemplate>
  );
}