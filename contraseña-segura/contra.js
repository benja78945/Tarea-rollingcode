let contraseña = prompt("Ingrese una contraseña de al menos 6 caracteres y una mayuscula")
let longitudMinima = 8;
let tieneMayuscula = /[A-Z]/;
let tieneMinuscula = /[a-z]/;
let tieneNumeros = /[0-9]/;

if (contraseña.length < longitudMinima) {
    console.log (`La contraseña debe tener al menos ${longitudMinima} caracteres.`)
    
} else if (!tieneMayuscula.test(contraseña)) {
    console.log ("la contraseña debe contener al menos una letra en mayuscula.")
}
else if (!tieneMinuscula.test(contraseña)) {
    console.log ("la contraseña debe contener al menos una letra en Minuscula.")}
else if (!tieneNumeros.test(contraseña)) {
    console.log ("la contraseña debe contener al menos un Numero.")}
    else {
        console.log ("Contraseña valida")
    }    
//[  ]: Definen un conjunto de caracteres.
//A-Z: Incluye todas las letras mayúsculas de la A a la Z.
//a-z: Incluye todas las letras minúsculas de la a a la z.