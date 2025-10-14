//1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
let meses = ['Enero','Febreo','Marzo','Abril','Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
console.log (meses)



//2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:
//let ciudades = [];
//let entrada;


//while (true) {
 // entrada = prompt("Ingrese el nombre de una ciudad (Cancelar para //terminar)");
//  if (entrada === null) {
//    break; 
//  }
//  ciudades.push(entrada);
//}

//console.log("Ciudades ingresadas:", ciudades);

//console.log("La cantidad de ciudades es:", ciudades.length);

//if (ciudades.length > 0) {
//  console.log("Primera ciudad:", ciudades[0]);
//}
//if (ciudades.length > 2) {
//  console.log("Tercera ciudad:", ciudades[2]);
//}
//if (ciudades.length > 0) {
//  console.log("Última ciudad:", ciudades[ciudades.length - 1]);
//}

//ciudades.push("París");
//console.log("Agregamos París:", ciudades);

//if (ciudades.length > 1) {
//  console.log("Segunda ciudad:", ciudades[1]);
//}

//if (ciudades.length > 1) {
//  ciudades[1] = "Barcelona";
 // console.log("Reemplazamos la segunda ciudad por Barcelona:", //ciudades);
//}



//3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

//let repeticiones = {}; 

//function numeroRandom(min, max) {
//    return Math.floor(Math.random() * (max - min + 1)) + min;
//}

//for (let i = 0; i <= 50; i++) {
//    let dado1 = numeroRandom(1, 6);
//    let dado2 = numeroRandom(1, 6);
 //   let suma = dado1 + dado2;
//    console.log("Suma de los dados:", suma);

   
//    if (repeticiones[suma]) {
//        repeticiones[suma]++;
//    } else {
//        repeticiones[suma] = 1;
//    }
//}


//console.log("Repeticiones de cada suma:");
//for (let suma in repeticiones) {
//    console.log(`La suma ${suma} salió ${repeticiones[suma]} veces`);
//}


//4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
//let numeroEntero = prompt('Ingrese un numero');

//function multiplo() {
//switch (true) {
//    case numeroEntero % 2 == 0://
//        console.log('Es un numero par');
//        break;
//    default:
//        console.log('Es un numero impar')  
//        break;
//}
//}

//multiplo();

//5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

//function texto(cadena) {
//  if (cadena === cadena.toUpperCase()) {
//    console.log("La cadena está formada solo por //mayúsculas.");
//  } else if (cadena === cadena.toLowerCase()) {
//    console.log("La cadena está formada solo por //minúsculas.");
//  } else {
//    console.log("La cadena tiene una mezcla de //mayúsculas y minúsculas.");
//  }
//}

//texto("Hola");




//6-Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.
//function rectangulo(a , b) {
//    return 2* (a + b);
//}
//let numero1 = Number(prompt("Ingrese el valor del lado más grande de un rectangulo"));
//let numero2 = Number(prompt("Ingrese el valor del lado más pequeño de un rectangulo"));
//console.log (`el valor pequeño + el valor grande es igual a `+ rectangulo(numero1, numero2))//


//7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
let numero = Number(prompt("Ingrese un numero para mostrar su tabla de multiplicar"));
let limite = Number(prompt("Ingrese hasta que numero quiere que se muestre la tabla de multiplicar"));
function tablaDeMultiplicar(num, limite) {
    for (let i = 1; i <= limite; i++) {
        console.log(`${num} X ${i}= ${num * i}`);
    }
}
tablaDeMultiplicar(numero, limite);