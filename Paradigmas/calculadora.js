import promptSync from 'prompt-sync';
import { operacionMatematica } from './operaciones.js';
const prompt = promptSync();

console.log ("Calculadora");

function calculadora () {

    const num1 = prompt("Digite el primer número: ");

    if (isNaN(num1)) {

        console.log ("El valor ingresado no es un número");
        return main();
    }

    const num2 = prompt("digite el segundo numero: ");

    if (isNaN(num2)){

        console.log ("el valor ingresado no es un numero");
        return main();

    }

    const operacion = prompt("Digite la operacion a realizar (+, -, *, /): ");

    operacionMatematica(num1, num2, operacion,calculadora);

}
calculadora();