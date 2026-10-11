// Todo lo que puedes querer cambiar vive aquí.
export const frente = {
  nombre: 'Frente Perlandés por la Libertad',
  lema: 'Libertad, unidad, orden',
  nacion: 'Perland',
  capital: 'Perland Village',
  // Datos del llamado a hablar con un dirigente.
  dirigente: 'EstoesMoises',
  sede: 'Perland Village, cerca del Spawn',
};

export type Grupo = 'derecho' | 'nacion' | 'obra' | 'pueblo';

export const grupos: Record<Grupo, string> = {
  derecho: 'Derecho',
  nacion: 'Nación',
  obra: 'Obras',
  pueblo: 'Pueblo y poder',
};

export interface Lamina {
  n: string;
  titulo: string;
  texto: string;
  grupo: Grupo;
  plano?: 'muro' | 'ferro' | 'terr' | 'capital';
}

export const laminas: Lamina[] = [
  { n: '01', titulo: 'Libertad para todos', texto: 'Cada residente de la nación de Perland vive libre, sin excepción.', grupo: 'derecho' },
  { n: '02', titulo: 'Estado de derecho', texto: 'Reglas escritas, iguales para todos. Quien las aplica también las cumple.', grupo: 'derecho' },
  { n: '03', titulo: 'Orden', texto: 'Convivencia con reglas claras, para que el pueblo construya en paz.', grupo: 'derecho' },
  { n: '04', titulo: 'Perland Village, país', texto: 'Convertir Perland Village en una potencia continental y en un país.', grupo: 'nacion', plano: 'capital' },
  { n: '05', titulo: 'Territorios recuperados', texto: 'Recuperar todos los territorios que nos pertenecen.', grupo: 'nacion', plano: 'terr' },
  { n: '06', titulo: 'Unidad', texto: 'Un solo pueblo con una sola causa.', grupo: 'nacion' },
  { n: '07', titulo: 'El muro', texto: 'Un muro que deje a los monstruos afuera.', grupo: 'obra', plano: 'muro' },
  { n: '08', titulo: 'Ferrocarril', texto: 'Un sistema de ferrocarril que funcione y una cada rincón de Perland.', grupo: 'obra', plano: 'ferro' },
  { n: '09', titulo: 'Noche sin miedo', texto: 'Andar de noche sin temer a los monstruos ni a otros jugadores.', grupo: 'obra', plano: 'muro' },
  { n: '10', titulo: 'Poder descentralizado', texto: 'Descentralizar el poder, para que no se concentre en unas pocas manos.', grupo: 'pueblo' },
  { n: '11', titulo: 'Riqueza para el pueblo', texto: 'Que lo que Perland produce llegue a todo el pueblo.', grupo: 'pueblo' },
  { n: '12', titulo: 'Necesidades cubiertas', texto: 'Que nadie en Perland se quede sin lo que necesita.', grupo: 'pueblo' },
];

// Obras y misiones en curso. Cada una puede llevar una captura de src/assets/obras/.
// Ejemplo: { titulo: 'El muro, tramo norte', texto: 'Qué se está haciendo.', estado: 'En curso', imagen: 'muro-norte.png' }
export interface Obra {
  titulo: string;
  texto: string;
  estado?: string;
  imagen?: string;
}

export const obras: Obra[] = [];
