const pilotosF1 = [
  "Max Verstappen",
  "Sergio Pérez",
  "Lewis Hamilton",
  "George Russell",
  "Charles Leclerc",
  "Carlos Sainz",
  "Lando Norris",
  "Oscar Piastri",
  "Fernando Alonso",
  "Esteban Ocon"
];
let carrera = pilotosF1.slice();

carrera.sort(); //funcion para ordenar alfabeticamente los elementos
carrera [2] = "Max Verstappen";
carrera [6] = pilotosF1[9];
carrera.splice (6,0,"Pierre Gasly");
carrera[8] = "Lance Stroll"
carrera[0] = pilotosF1[2];
carrera[1] = pilotosF1[8];
carrera[3] = "Valtteri Bottas";
let ganadores = carrera.slice(0,3); 


console.log(`Posicion de Comienzo de la Carrera`)
console.log(pilotosF1)
console.log(carrera)
console.log ("3er Puesto:",pilotosF1[0])
console.log ("5to Puesto:",pilotosF1[8])
console.log( pilotosF1[2],"Avanzo al primer puesto!!")
console.log (pilotosF1[3],"Avanzo al 6to puesto")
console.log (pilotosF1[5]," tuvo desperfectos con el vehículo y salió de la carrera.");  
console.log (pilotosF1[8],"avanzo al 2do puesto dejando afuera de la carrera a",pilotosF1[4]);
console.log("Los ganadores son:", ganadores)