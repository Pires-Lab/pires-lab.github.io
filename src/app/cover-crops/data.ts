export type CoverCrop = {
  id: string;
  name: string;
  scientificName: string;
  type: string;
  growthHabit: string;
  description: string[];
  benefits: string[];
  planting: {
    window: string;
    rateDrilled: string;
    rateBroadcast: string;
    depth: string;
    emergence: string;
  };
  stress: {
    cold: string;
    heat: string;
    drought: string;
    wetSoil: string;
  };
};

export const coverCropsData = [
  {
    id: "cereal-rye",
    name: "Cereal Rye",
    scientificName: "Secale cereale",
    type: "Cool-season annual",
    growthHabit: "Upright",
    // Para a descrição, cada frase ou parágrafo fica entre aspas dentro dos colchetes
    description: [
      "Upright cool-season annual that grows 3–6 feet tall. Requires vernalization to head and produce seed.",
      "Produces thick ground cover when planted in the spring."
    ],
    // Os benefícios viram uma lista simples
    benefits: [
      "Retains phosphorus near roots",
      "Protects soil during winter",
      "Supports beneficial arbuscular mycorrhizal fungi (AMF)",
      "Retains residual nitrogen in the soil",
      "Rapid growth",
      "Strong weed suppression"
    ],
    planting: {
      window: "Fall - early winter",
      rateBroadcast: "60–150 lbs/acre",
      rateDrilled: "40–120 lbs/acre",
      depth: "0.75–2 in"
    },
    stress: {
      cold: "Excellent",
      heat: "Fair",
      drought: "Very good",
      wetSoil: "Good",
      // Adicionei os novos campos da sua tabela
      salinity: "Good",
      lowFertility: "Excellent"
    }
  },
  {
    id: "barley",
    name: "Barley",
    scientificName: "Hordeum vulgare",
    type: "Cool-season annual",
    growthHabit: "Upright",
    description: [
      "Upright annual grass that grows 1.5–3 feet tall with hollow jointed stems with narrow and tapered leaves.",
      "Leaves are broader than most cereal grasses and seed heads appear bearded due to long awns.",
      "Winter barley requires vernalization for grain production, while spring barley does not."
    ],
    benefits: [
      "Good feed quality grain",
      "Deep roots and strongly supports mycorrhizal fungi",
      "Helps increase phosphorus and potassium availability for the next crop",
      "2-3 weeks earlier harvest than wheat allows earlier double-crop establishment"
    ],
    planting: {
      window: "Late summer – fall",
      rateBroadcast: "75–125 lbs/acre",
      rateDrilled: "60–100 lbs/acre",
      depth: "0.75–2 in"
    },
    stress: {
      cold: "Moderate",
      heat: "Fair",
      drought: "Very good",
      wetSoil: "Fair",
      salinity: "Excellent",
      lowFertility: "Excellent"
    }
  }
];