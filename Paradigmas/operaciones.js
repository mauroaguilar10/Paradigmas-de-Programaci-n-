import promptSync from 'prompt-sync';
const prompt = promptSync();

export function operacionMatematica (num1, num2, operacion, calculadora) {

        let resultado, guardar, orden, nuevoNumero;
        
        switch (operacion) {

            case "+":
 
                resultado = parseFloat(num1) + parseFloat(num2);
                console.log (`El resultado de la operacion es: ${resultado}`);

                guardar = prompt("Desea guardar el resultado para realizar otra operacion en base al mismo? (1/2): ");

                while (guardar != "1" && guardar != "2") {
                
                    console.log ("Opcion no valida");
                    guardar = prompt("Desea guardar el resultado para realizar otra operacion en base al mismo? (1/2): ");
                
                }

                if (guardar == "1") {
                    
                    operacion = prompt("Digite la operacion a realizar (+, -, *, /): ");
                    nuevoNumero = prompt("Digite el nuevo numero: ");
                    operacionMatematica (resultado, nuevoNumero, operacion);
                    
                } else if (guardar == "2") {
                    
                    orden = prompt("Desea realizar otra operacion? (1/2): ");
                    
                    while (orden != "1" && orden != "2") {
                
                        console.log ("Opcion no valida");
                        orden = prompt("Desea realizar otra operacion? (1/2): ");
                
                    }


                    if (orden == "1") {
                        
                        return calculadora();

                    } else if (orden == "2") {
                        
                        console.log ("Gracias por usar la calculadora");
                    
                    }

                }
                break;

            case "-":

                resultado = parseFloat(num1) - parseFloat(num2);
                console.log (`El resultado de la operacion es: ${resultado}`);
                
                guardar = prompt("Desea guardar el resultado para realizar otra operacion en base al mismo? (1/2): ");
                
                while (guardar != "1" && guardar != "2") {
                
                    console.log ("Opcion no valida");
                    guardar = prompt("Desea guardar el resultado para realizar otra operacion en base al mismo? (1/2): ");
                
                }

                if (guardar == "1") {
                
                    operacion = prompt("Digite la operacion a realizar (+, -, *, /): ");
                    nuevoNumero = prompt("Digite el nuevo numero: ");
                    operacionMatematica (resultado, nuevoNumero, operacion);
                
                } else if (guardar == "2") {
                
                    orden = prompt("Desea realizar otra operacion? (1/2): ");
                
                    while (orden != "1" && orden != "2") {
                
                        console.log ("Opcion no valida");
                        orden = prompt("Desea realizar otra operacion? (1/2): ");
                
                    }
                
                    if (orden == "1") {
                
                        return calculadora();
                
                    } else if (orden == "2") {
                
                        console.log ("Gracias por usar la calculadora");
                
                    }
                
                }
                
                break;

            case "*":
                
                resultado = parseFloat(num1) * parseFloat(num2);
                console.log (`El resultado de la operacion es: ${resultado}`);
                
                guardar = prompt("Desea guardar el resultado para realizar otra operacion en base al mismo? (1/2): ");
                
                while (guardar != "1" && guardar != "2") {
                
                    console.log ("Opcion no valida");
                    guardar = prompt("Desea guardar el resultado para realizar otra operacion en base al mismo? (1/2): ");
                
                }
                
                if (guardar == "1") {
                
                    operacion = prompt("Digite la operacion a realizar (+, -, *, /): ");
                    nuevoNumero = prompt("Digite el nuevo numero: ");
                    operacionMatematica (resultado, nuevoNumero, operacion);
                
                } else if (guardar == "2") {
                
                    orden = prompt("Desea realizar otra operacion? (1/2): ");
                
                    while (orden != "1" && orden != "2") {
                
                        console.log ("Opcion no valida");
                        orden = prompt("Desea realizar otra operacion? (1/2): ");
                
                    }
                
                    if (orden == "1") {
                
                        return calculadora();
                
                    } else if (orden == "2") {
                
                        console.log ("Gracias por usar la calculadora");
                
                    }
                
                }
    
                break;

            case "/":
                
                if (num2 == 0) {
 
                    console.log ("No se puede dividir entre cero");
                    return calculadora();
 
                }

                resultado = parseFloat(num1) / parseFloat(num2);
                console.log (`El resultado de la operacion es: ${resultado}`);
 
                guardar = prompt("Desea guardar el resultado para realizar otra operacion en base al mismo? (1/2): ");
 
                while (guardar != "1" && guardar != "2") {
 
                    console.log ("Opcion no valida");
                    guardar = prompt("Desea guardar el resultado para realizar otra operacion en base al mismo? (1/2): ");
 
                }
 
                if (guardar == "1") {
 
                    operacion = prompt("Digite la operacion a realizar (+, -, *, /): ");
                    nuevoNumero = prompt("Digite el nuevo numero: ");
                    operacionMatematica (resultado, nuevoNumero, operacion);
 
                } else if (guardar == "2") {
 
                    orden = prompt("Desea realizar otra operacion? (1/2): ");
 
                    while (orden != "1" && orden != "2") {
 
                        console.log ("Opcion no valida");
                        orden = prompt("Desea realizar otra operacion? (1/2): ");
 
                    }
 
                    if (orden == "1") {
 
                        return calculadora();
 
                    } else if (orden == "2") {
 
                        console.log ("Gracias por usar la calculadora");
 
                    }
                }
                
                break;
                
            default:
                console.log ("Operacion no valida");
                return calculadora();
                
        }

    }
