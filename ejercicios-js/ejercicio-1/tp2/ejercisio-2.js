//1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
//let edad = Number(prompt("Ingrese su edad"))

//if (edad < 18) {
   // console.log (`Eres menor de edad`);

//}
//else if (edad >=18) {
  //  console.log ("Eres mayor de edad, puedes conducir")

//}
//else {
 //   console.log('ingrese un valor numerico')
//}

//2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
////let nota = Number(prompt('Ingrese la nota del 0-10'))

//switch (nota) {
   // case 0:
   // case 1:
   // case 2:        
   //     console.log("Muy deficiente");
   // break;
   // case 3:
   // case 4:
   //     console.log ("Insuficiente");    
   // break;
   // case 5:
   // case 6:
  //      console.log ("suficiente");
   // break;  
   // case 7:
   //     console.log("bien");
   // break;
   // case 8:
   // case 9:
   //     console.log ("notable");
   // break;
   // case 10:
   //     console.log ("sobresaliente");
  //  break;
  //  default:
   //     console.log("Ingrese un valor numerico 0-10")    
                            
//}
//3- Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
//let texto = "";
//let resultado = "";
//do {
  //texto = prompt("Ingresa una cadena de texto (o presiona Cancelar para salir):");

  //if (texto !== null) {
    // Si resultado no está vacío, agrega un guion antes de concatenar
    //if (resultado === "") {
      //resultado = texto;
    //} else {
      //resultado += "-" + texto;
    //}
  //}

//} while (texto !== null);

//console.log("Cadenas concatenadas:");
//console.log(resultado);;

//6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :



//let piramide = "";
//for (let i = 1; i <= 30; i++) {
//    piramide += i.toString().repeat(i) + " ";
//    console.log(piramide);

//}

//7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

//let piramide = "";
//let numero = Number(prompt('Indique un numero'))

//for (let i = numero; i >= 1; i--) {
//    piramide += i.toString().repeat(i) + " ";
//   console.log(piramide);
//}
//8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 
//let piramide = "";
//let numero = Number(prompt('inque un numero de valor alto para comenzar el recorrido, igual o menor a 50'))

//for (let i = 1; i <= numero ; i++) {
 //   if (numero <= 50) {
 //   piramide += i;
   // console.log( piramide);
   // }
   // else{
   //     console.log ('inque un numero igual a 50 o menor')
  //  }
//}

//9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
for (let i= 1; i <= 1; i++) {
    console.log (i);
    if (i % 4==0) {
        console.log ( i +": multiplo de 4");
    }
    else if (i % 5==0) {
        console.log('————————————————————————————————————————')
    }
    else if  (i % 9 ==0) {
        console.log (i+ ": multiplo de 9")
    }
}

//10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

//1- Realiza un script que pida número de filas y columnas y escriba una tabla.
//2-Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente.
//3-Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

let filas = parseInt(prompt("Ingrese el número de filas:"));
let columnas = parseInt(prompt("Ingrese el número de columnas:"));
let total = filas * columnas;
let numero = total;

for (let i = 0; i < filas; i++) {       
    let linea = "";                     
    for (let j = 0; j < columnas; j++) { 
        linea += numero + "\t";         
        numero--;                       
    }
    console.log(linea);                 
}