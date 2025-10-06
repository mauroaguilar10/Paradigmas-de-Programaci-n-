export type Estado = "pendiente" | "en curso" | "terminada" | "cancelada";
export type DificultadNum = 1 | 2 | 3;

export interface Tarea {
  id: number;
  titulo: string;
  descripcion?: string;     // ← opcional
  estado: Estado;
  fechaCreacion: string;
  vencimiento?: string;     // ← opcional
  dificultad: DificultadNum;
}
