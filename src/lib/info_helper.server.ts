import path from 'node:path';
import fs from 'node:fs';
import * as XLSX from 'xlsx';

/** Generic helper - atualizado para aceitar o nome do arquivo dinamicamente */
function readSheet<T = unknown>(sheetName: string, fileName = 'info.xlsx'): T[] {
  const file = path.join(process.cwd(), 'public', 'data', fileName);
  const buffer = fs.readFileSync(file);          // binary read
  const wb = XLSX.read(buffer, { type: 'buffer' });

  if (!wb.SheetNames.includes(sheetName))
    throw new Error(`Sheet “${sheetName}” not found in ${file}`);

  return XLSX.utils.sheet_to_json<T>(wb.Sheets[sheetName]);
}

/** Read data from JSON file */
function readJSON<T = unknown>(fileName: string): T[] {
  const file = path.join(process.cwd(), 'public', 'data', fileName);
  
  if (!fs.existsSync(file)) {
    console.warn(`JSON file not found: ${file}. Returning empty array.`);
    return [];
  }
  
  const content = fs.readFileSync(file, 'utf-8');
  return JSON.parse(content) as T[];
}

// ---------------------------------------------------------
// INTERFACES (Moldes dos dados)
// ---------------------------------------------------------

interface TeamMember {
  id: string | number;
  name: string;
  role: string;
  pfp_file_name: string;
  linkedin: string;
  research_info: string;
  group?: string;
}

interface NewsPost {
  id: string | number;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  category: string;
  md_file_name: string;
  img_file_name: string;
}

interface Publication {
  id: string | number;
  title: string;
  authors: string;
  journal: string;
  year: string;
  url: string;
  doi: string;
}

// Molde exato das colunas do seu Excel de Cover Crops
interface CoverCropRaw {
  common_name: string;
  scientific_name: string;
  growth_habit: string;
  life_cycle: string;
  description: string;
  main_benefits: string;
  window: string;
  broadcast_rate: string;
  drilled_rate: string;
  depth: string;
  cold: string;
  drought: string;
  heat: string;
  wet_soil: string;
  salinity: string;
  low_fertility: string;
}

// ---------------------------------------------------------
// EXPORTAÇÕES (O que o site realmente usa)
// ---------------------------------------------------------

export const teamData = readSheet<TeamMember>('team');
export const newsData = readSheet<NewsPost>('news');
export const pubData = readJSON<Publication>('publications.json');

// 1. Lemos o Excel das Cover Crops (Buscando o arquivo 'cc_info.xlsx' na pasta public/data)
// NOTA: Se a aba lá embaixo no Excel se chamar 'Sheet1', troque 'Planilha1' por 'Sheet1'
const rawCoverCrops = readSheet<CoverCropRaw>('Sheet1', 'cc_info.xlsx');

// 2. Traduzimos para o formato que a página de Cover Crops espera
export const coverCropsData = rawCoverCrops.map(crop => ({
  id: crop.common_name ? crop.common_name.toLowerCase().replace(/\s+/g, '-') : Math.random().toString(),
  name: crop.common_name || '',
  scientificName: crop.scientific_name || '',
  type: crop.life_cycle || '',
  growthHabit: crop.growth_habit || '',
  
  // O ".split(';')" transforma o texto em lista separando no ponto e vírgula
  description: crop.description ? crop.description.split(';').map(s => s.trim()).filter(Boolean) : [],
  benefits: crop.main_benefits ? crop.main_benefits.split(';').map(s => s.trim()).filter(Boolean) : [],
  
  planting: {
    window: crop.window || '-',
    rateBroadcast: crop.broadcast_rate || '-',
    rateDrilled: crop.drilled_rate || '-',
    depth: crop.depth || '-'
  },
  stress: {
    cold: crop.cold || '-',
    heat: crop.heat || '-',
    drought: crop.drought || '-',
    wetSoil: crop.wet_soil || '-',
    salinity: crop.salinity || '-',
    lowFertility: crop.low_fertility || '-'
  }
}));