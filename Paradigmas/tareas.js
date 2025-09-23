import promptSync from 'prompt-sync';
import { cargar } from './cargar.js';
const prompt = promptSync();

/*Necesito que todas las tareas tengan un Título, para poder identificarlas en la lista. Además, algunas de ellas, deberían tener una descripción para poder agregar información que me sirva cuando las vea en detalle.
Cuando creo una tarea, debería ponerse en estado pendiente, pues aún no la he empezado a hacer. Luego, me gustaría poder cambiar su esta a en curso o terminada. A veces, las tareas pierden sentido y me gustaría poder cambiarlas a canceladas.
Además, cuando creo una tarea, tendría que cargarse automáticamente la fecha y hora actuales como fecha de creación.
En algunas tareas, voy a querer poner un vencimiento, para recordar que debo hacerlas antes de que expiren.
Por último, para todas las tareas, necesito saber cuál es el costo que tengo. Por defecto, si no pongo nada, una tarea debería ser dificultad fácil. Pero me gustaría poder cambiar ese valor a medio o difícil. Estaría bueno si pudiera representar esto con número cuando las cargo, pero verlo con estrellitas o algún emoji en el detalle de tareas.*/

let tareas = [];
let idTarea = 1; // contador de IDs

function tarea() {

    console.log("Tareas");
    console.log("1. Crear tarea");
    console.log("2. Ver tareas");
    console.log("3. Buscar tarea");
    console.log("4. Salir");

    const opcion = prompt("Seleccione una opción: ");

    switch (opcion) {

        case "1":
            console.log("Crear tarea");

            const titulo = prompt("Ingrese el título de la tarea: ");
            
            const descripcion = prompt("Ingrese la descripción de la tarea (opcional): ");
            
            let estado;
            
            do {
                estado = prompt("Ingrese el estado de la tarea (pendiente, en curso, terminada, cancelada): ");
            } while (!["pendiente", "en curso", "terminada", "cancelada"].includes(estado));
            
            let vencimiento;
           
            do {
                vencimiento = prompt("Ingrese la fecha de vencimiento de la tarea (formato dd/mm/aa, opcional): ");
                if (vencimiento === "") break; // permite dejarlo vacío
            } while (vencimiento !== "" && !/^\d{2}\/\d{2}\/\d{2}$/.test(vencimiento));
            
            let dificultad;
            
            do {
                dificultad = parseInt(prompt("Ingrese la dificultad de la tarea (1: fácil, 2: medio, 3: difícil): "));
            } while (![1, 2, 3].includes(dificultad));
            
            const fechaCreacion = new Date().toLocaleString();
            
            cargar(tareas, idTarea, titulo, descripcion, estado, fechaCreacion, vencimiento, dificultad);
            idTarea++; // incrementa el ID para la próxima tarea

            tarea();

            break;

        case "2":
            console.log("Ver tareas");
            
            if (tareas.length === 0) {
                console.log("No hay tareas disponibles.");
            } else {
                tareas.forEach(tarea => {
                    console.log(`ID: ${tarea.id}, Título: ${tarea.titulo}, descripcion: ${tarea.descripcion}, Estado: ${tarea.estado}, fechaCreacion: ${tarea.fechaCreacion}, vencimiento: ${tarea.vencimiento}, Dificultad: ${'⭐'.repeat(tarea.dificultad)}`);
                });
            }

            tarea();

            break;
        
        case "3":
            console.log("Buscar tarea");
            const idBuscar = parseInt(prompt("Ingrese el ID de la tarea a buscar: "));
            const tareaEncontrada = tareas.find(t => t.id === idBuscar);
            if (tareaEncontrada) {
                console.log("Tarea encontrada:");
                console.log(`ID: ${tareaEncontrada.id}`);
                console.log(`Título: ${tareaEncontrada.titulo}`);
                console.log(`Descripción: ${tareaEncontrada.descripcion}`);
                console.log(`Estado: ${tareaEncontrada.estado}`);
                console.log(`Fecha de creación: ${tareaEncontrada.fechaCreacion}`);
                console.log(`Vencimiento: ${tareaEncontrada.vencimiento}`);
                console.log(`Dificultad: ${'⭐'.repeat(tareaEncontrada.dificultad)}`);
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

