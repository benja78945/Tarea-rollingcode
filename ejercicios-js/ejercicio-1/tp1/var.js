//1-Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
//let hola = "Hola Mundo";
//alert (hola);
    
//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
//document.write(hola + ', como estan?');

//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
//let suma = 3+5;
//console.log (suma)

//4-Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
//let usuario = prompt('Como es tu nombre?')
//console.log (`Hola ${usuario}, como estas?`)

//5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
//let numero1 = Number(prompt('Escriba un numero'))
///let numero2 = Number(prompt('Escriba el Segundo numero'))
//let numero3 = Number(prompt('Escriba el tercer numero'))
//let total = numero1 + numero2;
//6- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
//if (numero1 < numero2 && numero2 > numero3){
//    console.log(`El numero mayor es segundo numero ${numero2}`)
//}  else if(numero1 > numero3){
//    console.log(`El numero mayor es el primer numero ${numero1}`)
//} else {
//    console.log(`El numero mayor es el tercer numero ${numero3}`)
//}

//8.- Escribe un programa que pida un número y diga si es divisible por 2

//let numero = Number(parseInt((prompt('Ingrese un numero entero'))))
//if (isNaN(numero)) {
   // alert("ingrese un numero entero")
//}
//else if( numero % 2 == 0) {
    //console.log(`El resultado es par`)
//}
//else {
//    console.log (`El resultado es impar ${numero}`)
//}

//console.log (`la suma de numero1 y numero2 es: ${total}`)

//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen

//let frase = prompt('Escriba una frase')

//let lectura = frase.toLocaleLowerCase();

//let vocales = "";
//for (let i = 0; i <lectura.length; i++) {
   // let letra = lectura[i];

   // if (
   //     letra === "a" ||
   //     letra === "e" ||
   //     letra === "i" ||
   //     letra === "o" ||
   //     letra === "u" 

   // ){
   //     vocales+= letra;
   // }
//}
//console.log ("vocales:", vocales)
//console.log ("cantidad de vocales: ", vocales.length)

//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
let numero = Number(parseInt((prompt('Ingrese un numero entero'))))
if (isNaN(numero)) {
    alert("ingrese un numero entero")
}
else if( numero % 2 == 0 && numero % 5 == 0) {
    console.log(`El numero es divisible por 2 y 5`)
}
else if( numero % 3 == 0 && numero % 7 == 0) {
    console.log(`El numero es divisible por 3 y 7`)
}
else if( numero % 2 == 0) {
    console.log(`El numero es divisible por 2`)
}   
else if( numero % 3 == 0) {
    console.log(`El numero es divisible por 3`)
}
else if( numero % 5 == 0) {
    console.log(`El numero es divisible por 5`)
}
else if( numero % 7 == 0) {
    console.log(`El numero es divisible por 7`)
}
else {
    console.log (`El numero no es divisible por 2, 3, 5 o 7`)
}
//console.log (`la suma de numero1 y numero2 es: ${total}`)

