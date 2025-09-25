let estacion = prompt("Escriba su estacion favorita en el año")
switch (estacion) {
    case "verano":
    //si la variable estacion contiene la cadena de texto "verano"
    //se ejecutara este bloque de codigo
    console.log (`el verano`);
    break
    case "primavera":
    //si la variable estacion contiene la cadena de texto "primavera"
    //se ejecutara este bloque de codigo
    console.log (`la primavera`);
    break
    case "otoño":
    //si la variable estacion contiene la cadena de texto "otoño"
    //se ejecutara este bloque de codigo
    console.log (`el otoño`);
    break
        case "invierno":
    //si la variable estacion contiene la cadena de texto "invierno"
    //se ejecutara este bloque de codigo
    console.log (`el invierno`);
    break
    default:
        //si la variable no contiene ningun nombre valido
        //se ejecutara este bloque de codigo 
        console.log (`no es una estacion del año`);
}