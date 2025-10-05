//Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
function rectangulo(a , b) {
    return 2* (a + b);
}
let numero1 = Number(prompt("Ingrese el valor del lado más grande de un rectangulo"));
let numero2 = Number(prompt("Ingrese el valor del lado más pequeño de un rectangulo"));
console.log (`el valor pequeño + el valor grande es igual a `+ rectangulo(numero1, numero2))
