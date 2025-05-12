
const tasaCambio = 1300;

let continuar = true;

while (continuar) {
const opcion = prompt(
    "Conversor de Divisas ARS a USD\n\n" +
    "1. Convertir ARS a USD\n" +
    "2. Salir\n" +
    "Ingrese una opción (1-2):"
);

if (opcion == "1") {
    let montoARS = parseFloat(prompt("Ingrese la cantidad de ARS a convertir:"));
    monto = parseFloat(montoARS / tasaCambio).toFixed(2);
    alert("La cantidad de USD es: " + monto);
} else if (opcion == "2") {
    alert("Saliendo del conversor de divisas.");
    continuar = false;
} else {
    alert("Opción no válida. Por favor, elija una opción válida.");
}
} 
