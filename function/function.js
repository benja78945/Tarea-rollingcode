function sumar (a , b) {
    return a + b;
}
console.log("a + b es igual a " + "" + sumar(20,5));



const restar = function(a, b) {
    return a - b;
};

console.log("a - b es igual a " + restar(20, 5));


// Ejercicio con función declarada: Multiplicar dos números
function multiplicar(a, b) {
    return a * b;
}
let numero1 = Number(prompt("Ingrese el primer número a multiplicar:"));
let numero2 = Number(prompt("Ingrese el segundo número a multiplicar:"));
console.log("a * b es igual a " + multiplicar(numero1, numero2)); 

// Ejercicio con función anónima: Dividir dos números
const dividir = function(a, b) {
    if (b === 0) {
        return "No se puede dividir por cero";
    }
    return a / b;
};
console.log("a / b es igual a " + dividir(10, 2)); // Imprime: a / b es igual a 5
