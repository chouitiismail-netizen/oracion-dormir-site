// Curated content configuration for homepage sections

export const START_HERE_SLUGS = [
  'oraciones-para-la-ansiedad',
  'oracion-para-calmar-la-ansiedad',
  'oracion-para-la-ansiedad-nocturna',
  'oracion-para-soltar-preocupaciones',
  'oracion-para-la-mente-inquieta',
  'oracion-para-tranquilizar-el-corazon',
];

export const FEATURED_SLUGS = [
  'oracion-para-ataques-de-ansiedad',
  'oracion-para-la-angustia',
  'oracion-para-dejar-el-miedo',
  'oracion-para-la-ansiedad-antes-de-dormir',
  'oracion-para-respirar-y-confiar-en-dios',
  'oracion-corta-para-la-ansiedad',
];

// Primary prayer for main CTA
export const PRIMARY_PRAYER_SLUG = 'oraciones-para-la-ansiedad';

// Quick action categories with icons and slugs
export interface QuickAction {
  id: string;
  label: string;
  icon: 'anxiety' | 'gratitude' | 'protection' | 'family' | 'trust';
  slug: string;
}

export const QUICK_ACTIONS: QuickAction[] = [
  { id: 'ansiedad', label: 'Ansiedad', icon: 'anxiety', slug: 'oracion-dormir-sin-ansiedad' },
  { id: 'gratitud', label: 'Gratitud', icon: 'gratitude', slug: 'oracion-dormir-con-gratitud' },
  { id: 'proteccion', label: 'Protección', icon: 'protection', slug: 'oracion-proteccion-en-la-noche' },
  { id: 'familia', label: 'Familia', icon: 'family', slug: 'oracion-familia-antes-de-dormir' },
  { id: 'confianza', label: 'Confianza', icon: 'trust', slug: 'oracion-confiar-incertidumbre' },
];

// Daily verse for "Santo del día" equivalent
export const DAILY_VERSES = [
  { text: 'En paz me acuesto y me duermo, porque solo tú, Señor, me haces vivir confiado.', reference: 'Salmo 4:8' },
  { text: 'Confía en el Señor de todo corazón y no te apoyes en tu propia inteligencia.', reference: 'Proverbios 3:5' },
  { text: 'Vengan a mí todos los que están cansados y agobiados, y yo les daré descanso.', reference: 'Mateo 11:28' },
  { text: 'No se inquieten por nada; más bien, en toda ocasión, con oración y ruego, presenten sus peticiones a Dios.', reference: 'Filipenses 4:6' },
  { text: 'El Señor es mi pastor, nada me falta; en verdes praderas me hace descansar.', reference: 'Salmo 23:1-2' },
];

export function getDailyVerse() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  return DAILY_VERSES[dayOfYear % DAILY_VERSES.length];
}
