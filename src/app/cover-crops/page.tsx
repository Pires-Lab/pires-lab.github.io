import { coverCropsData } from "@/lib/info_helper.server";
import CoverCropsClient from "./CoverCropsClient";

export const metadata = {
  title: "Cover Crops Database - Pires Lab",
  description: "Explore detailed agronomic information and management practices.",
};

export default function CoverCropsPage() {
  // O servidor lê o Excel usando a biblioteca fs (sem dar erro)
  // E passa os dados prontos como 'prop' para o nosso componente visual
  return <CoverCropsClient coverCropsData={coverCropsData} />;
}