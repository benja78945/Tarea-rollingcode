let inputNombre = document.getElementById ('nombre');
let inputEmail = document.querySelector ('#email');
let inputRol = document.getElementById('rol');
let inputImage= document.querySelector('#image');


function cargarDatosEnTarjetas(){
let fotoPerfil = document.querySelector('img');
let nombreCabecera = document.getElementById('cabecera');
let mail = document.querySelector('#contacto');
let rol = document.querySelector('#puesto');

if (inputNombre.value && inputEmail.value && inputImage.value && inputRol.value) {
    nombreCabecera.innerText = inputNombre.value;
    rol.innerText = inputRol.value;
    mail.innerText = inputEmail.value;
    fotoPerfil.src = inputImage.value;
    limpiarForm();
}else {
    alert ("No cumplen todos los requisitos")
}
function limpiarForm(){
inputNombre.value = "";
inputImage.value = "";
inputEmail.value = "";
inputRol.value = "";
}
}
document.querySelector('#btn-carga').addEventListener('click', cargarDatosEnTarjetas)

