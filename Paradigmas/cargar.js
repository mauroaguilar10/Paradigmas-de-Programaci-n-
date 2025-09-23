import promptSync from 'prompt-sync';
const prompt = promptSync();

export function cargar(tareas, id, titulo, descripcion, estado, fechaCreacion, vencimiento, dificultad) {
    tareas.push({
        id,
        titulo,
        descripcion,
        estado,
        fechaCreacion,
        vencimiento,
        dificultad
    });
}
