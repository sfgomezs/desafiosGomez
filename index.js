do{
    let operacion = prompt("Hola, por favor seleccione la operacion que decea realizar:   1-Suma 2-Resta 3-Multiplicacion 4-Divicion 0-Salir");
    operacion = parseInt(operacion);
    let numero1;
    let numero2;
    let salida;

    switch (operacion) {
        case 1:
            numero1 = parseInt(prompt("Ingrese el primer numero"));
            numero2 = parseInt(prompt("Ingrese el segundo numero"));
            let suma = numero1 + numero2;
            salida  = "Suma: " + numero1 + " + " + numero2 + " = " + suma;
            alert(salida);
            break;

        case 2:
            numero1 = parseInt(prompt("Ingrese el primer numero"));
            numero2 = parseInt(prompt("Ingrese el segundo numero"));
            let resta = numero1 - numero2;
            salida  = "Resta: " + numero1 + " - " + numero2 + " = " + resta;
            alert(salida);
            break;
        
        case 3:
            numero1 = parseInt(prompt("Ingrese el primer numero"));
            numero2 = parseInt(prompt("Ingrese el segundo numero"));
            let mult = numero1 * numero2;
            salida  = "Multiplicacion: " + numero1 + " X " + numero2 + " = " + mult;
            alert(salida);
            break;    

        case 4:
            numero1 = parseInt(prompt("Ingrese el primer numero"));
            numero2 = parseInt(prompt("Ingrese el segundo numero"));
            let div = numero1 / numero2;
            salida  = "Divicion: " + numero1 + " / " + numero2 + " = " + div;
            alert(salida);
            break; 

        case 0:
            salida  = "Presiono la opcion de salir";
            alert(salida);
            break; 

        default:
            alert("La opcion seleccionada es invalida")
            break;
    }
}while (operacion != 0)