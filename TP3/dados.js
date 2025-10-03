
let repeticiones = {}; 

function numeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 50; i++) {
    let dado1 = numeroRandom(1, 6);
    let dado2 = numeroRandom(1, 6);
    let suma = dado1 + dado2;
    console.log("Suma de los dados:", suma);

   
    if (repeticiones[suma]) {
        repeticiones[suma]++;
    } else {
        repeticiones[suma] = 1;
    }
}


console.log("Repeticiones de cada suma:");
for (let suma in repeticiones) {
    console.log(`La suma ${suma} salió ${repeticiones[suma]} veces`);
}