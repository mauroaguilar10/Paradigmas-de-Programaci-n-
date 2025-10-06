// tareas.ts
import promptSync from "prompt-sync";
import { cargar } from "./cargar.js";           // <- sin .js en TS
import type { Tarea, Estado, DificultadNum } from "./tipos.js";

const prompt = promptSync();

let tareas: Tarea[] = [];
let idTarea: number = 1; // contador de IDs

function tarea(): void {
  console.log("Tareas");
  console.log("1. Crear tarea");
  console.log("2. Ver tareas");
  console.log("3. Buscar tarea");
  console.log("4. Salir");

  const opcion: string = prompt("Seleccione una opción: ");

  switch (opcion) {
    case "1":
      console.log("Crear tarea");

      const titulo: string = prompt("Ingrese el título de la tarea: ");

      const descripcionInput: string = prompt(
        "Ingrese la descripción de la tarea (opcional): "
      );
      const descripcion: string | undefined =
        descripcionInput.trim() === "" ? undefined : descripcionInput;

      let estado: Estado;
      do {
        const e = prompt(
          "Ingrese el estado de la tarea (pendiente, en curso, terminada, cancelada): "
        ) as Estado;
        estado = e;
      } while (!["pendiente", "en curso", "terminada", "cancelada"].includes(estado));

      let vencimiento: string | undefined;
      do {
        const v = prompt(
          "Ingrese la fecha de vencimiento (dd/mm/aa, opcional): "
        );
        if (v.trim() === "") {
          vencimiento = undefined;
          break;
        }
        if (/^\d{2}\/\d{2}\/\d{2}$/.test(v)) {
          vencimiento = v;
          break;
        }
        console.log("Formato inválido.");
      } while (true);

      let dificultad: DificultadNum;
      do {
        const d = Number(
          prompt("Ingrese la dificultad (1: fácil, 2: medio, 3: difícil): ")
        ) as DificultadNum;
        dificultad = d;
      } while (![1, 2, 3].includes(dificultad));

      const fechaCreacion: string = new Date().toLocaleString();

      cargar(tareas, idTarea, titulo, descripcion, estado, fechaCreacion, vencimiento, dificultad);
      idTarea++; // incrementa el ID para la próxima tarea

      tarea();
      break;

    case "2":
      console.log("Ver tareas");
      if (tareas.length === 0) {
        console.log("No hay tareas disponibles.");
      } else {
        tareas.forEach((t) => {
          console.log(
            `ID: ${t.id}, ` +
              `Título: ${t.titulo}, ` +
              `Descripción: ${t.descripcion ?? "Sin descripción"}, ` +
              `Estado: ${t.estado}, ` +
              `Fecha de creación: ${t.fechaCreacion}, ` +
              `Vencimiento: ${t.vencimiento ?? "Sin vencimiento"}, ` +
              `Dificultad: ${"⭐".repeat(t.dificultad)}`
          );
        });
      }
      tarea();
      break;

    case "3":
      console.log("Buscar tarea");
      const idBuscar: number = Number(prompt("Ingrese el ID de la tarea a buscar: "));
      const tareaEncontrada = tareas.find((t) => t.id === idBuscar);
      if (tareaEncontrada) {
        console.log("Tarea encontrada:");
        console.log(`ID: ${tareaEncontrada.id}`);
        console.log(`Título: ${tareaEncontrada.titulo}`);
        console.log(`Descripción: ${tareaEncontrada.descripcion ?? "Sin descripción"}`);
        console.log(`Estado: ${tareaEncontrada.estado}`);
        console.log(`Fecha de creación: ${tareaEncontrada.fechaCreacion}`);
        console.log(`Vencimiento: ${tareaEncontrada.vencimiento ?? "Sin vencimiento"}`);
        console.log(`Dificultad: ${"⭐".repeat(tareaEncontrada.dificultad)}`);
      } else {
        console.log("Tarea no encontrada.");
      }
      tarea();
      break;

    case "4":
      console.log("Salir");
      return;

    default:
      console.log("Opción no válida");
      return tarea();
  }
}

tarea();
