//let array =[1,"pedro",true,false,"juan"];
//array [0] = "German";
//array.splice (2,0,"Pablo");  //agregar elementos, para agregar debemos insertar 3 argumentos, posicion, la segunda posicion debe estar en 0 y el 3er argumento el elementos a agregar
//array.splice (3,1); //eliminar elementos para eliminar 2 argumentos, posicion y cantidad de elementos

//for (var i=0; i<= array.length; i++) {
//console.log (array[i]);
//}
//Aqui simplemente usamos el cicle for para mostrar cada uno de los elementos del arreglo


//reemplazar un elemento 

// array [1] = "German";

//Metodo splice se utiliza tanto para insertar como eliminar elementos  

//Metodo forEach ....Recorre el array y ejecuta una función por cada elemento.
const nombres = ["Ana", "Luis", "Pedro", "María"];

nombres.forEach (nombre => {
    console.log (`hola ${nombre}`)
})

//Metodo Map ....Crea un nuevo array transformando cada elemento.
const numeros = [2 , 4 , 6 , 8];

const dobles = numeros.map (num => num * 2);
console.log (dobles);

// Metodo filter ....Crea un nuevo array con los elementos que cumplen una condición.
const edades = [12, 14, 18 , 25];
const mayores = edades.filter(edad => edad >=18);
console.log(mayores);

//Metodo find ....Devuelve el primer elemento de busqueda dependiendo la condicion y termina su funcion
const numeros2 = [2, 5, 8, 10, 12 ,15]
const encontrado = numeros2.find(num => num > 10);
console.log (encontrado);

//Metodo findIndex .... devuelve la primera posicion del elemento que cumple su funcion
const valores = [3, 8, -5, 10, -2];

const indice = valores.findIndex(num => num < 0);

console.log(indice); //2

//Metodo Some .... Devuelve true si al menos uno cumple la condición.
const numeros3 = [1, 3, 5, 2, 11];

const hayPar = numeros3.some(num => num % 2 === 0);

console.log(hayPar); // true
//Metodo Every ....Devuelve true solo si todos cumplen la condición.
const numeros4 = [2, 4, 6, 8];

const todosPositivos = numeros4.every(num => num > 0);

console.log(todosPositivos); // true

//Combinacion map y filter Primero filtra, luego transforma.
const numeros5 = [2, 5, 7, 10, 12];
const resultado = numeros5
.filter (num => num >= 5)
.map (num => num * 2);
console.log (resultado); //[10, 14, 20, 24]
console.log (resultado.some(num => num >= 20)) // agregado de condiconal some por practicar(?
//