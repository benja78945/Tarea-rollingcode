//let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];


let ciudades = [];
let entrada;


while (true) {
  entrada = prompt("Ingrese el nombre de una ciudad (Cancelar para terminar)");
  if (entrada === null) {
    break; 
  }
  ciudades.push(entrada);
}

console.log("Ciudades ingresadas:", ciudades);

console.log("La cantidad de ciudades es:", ciudades.length);

if (ciudades.length > 0) {
  console.log("Primera ciudad:", ciudades[0]);
}
if (ciudades.length > 2) {
  console.log("Tercera ciudad:", ciudades[2]);
}
if (ciudades.length > 0) {
  console.log("Última ciudad:", ciudades[ciudades.length - 1]);
}

ciudades.push("París");
console.log("Agregamos París:", ciudades);

if (ciudades.length > 1) {
  console.log("Segunda ciudad:", ciudades[1]);
}

if (ciudades.length > 1) {
  ciudades[1] = "Barcelona";
  console.log("Reemplazamos la segunda ciudad por Barcelona:", ciudades);
}