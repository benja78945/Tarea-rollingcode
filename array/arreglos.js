let array =[1,"pedro",true,false,"juan"];
array [0] = "German";
array.splice (2,0,"Pablo");  //agregar elementos, para agregar debemos insertar 3 argumentos, posicion, la segunda posicion debe estar en 0 y el 3er argumento el elementos a agregar
array.splice (3,1); //eliminar elementos para eliminar 2 argumentos, posicion y cantidad de elementos

for (var i=0; i<= array.length; i++) {
console.log (array[i]);
}
//Aqui simplemente usamos el cicle for para mostrar cada uno de los elementos del arreglo


//reemplazar un elemento 

// array [1] = "German";

//Metodo splice se utiliza tanto para insertar como eliminar elementos  