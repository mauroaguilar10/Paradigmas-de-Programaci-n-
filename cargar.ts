// cargar.ts
import type { Tarea, Estado, DificultadNum } from "./tipos.js";

export function cargar(
  tareas: Tarea[],
  id: number,
  titulo: string,
  descripcion: string | undefined,
  estado: Estado,
  fechaCreacion: string,
  vencimiento: string | undefined,
  dificultad: DificultadNum
): void {
  const nueva: Tarea = {
    id,
    titulo,
    estado,
    fechaCreacion,
    dificultad,
    ...(descripcion !== undefined ? { descripcion } : {}),
    ...(vencimiento !== undefined ? { vencimiento } : {}),
  };

  tareas.push(nueva);
}
