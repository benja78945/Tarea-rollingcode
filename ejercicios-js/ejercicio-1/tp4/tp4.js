//1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.
//const auto = {
//    color : 'negro',
//    marca : 'bmw',
//    modelo : '2020',
//    encendido : false,
//    encender : function() {
//       this.encendido = true;
//   },
//   apagar : function() {
//       this.encendido = false; 
//   }
//};  
//auto.apagar();
//console.log(auto);



//2-/*Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
//  Una propiedad titular con el valor "Alex".
//  Una propiedad saldo, teniendo como valor inicial 0.
//  Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
//  Un método extraer() que permita retirar la cantidad pasada como parámetro.
//  Un método informar() que retorne la información del estado de la cuenta. 
  
//  Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.*/

class Cuenta {
  constructor(titular, saldo = 1000) {
    this.titular = titular;
    this.saldo = saldo;
  }

  //Ingresar o Extraer
  ingresar(valor) {
    this.saldo = this.saldo + valor;
    console.log(`Se ingresó $${valor} a la cuenta de ${this.titular}`);

    this.informar();
  }
  extraer(valor) {
    if (valor > this.saldo) {
      console.log("No tiene saldo suficiente para completar la operación");
    } else {
      this.saldo = this.saldo - valor;
      console.log(`Se retiró $${valor} a la cuenta de ${this.titular}`);

      this.informar();
    }
  }

  //Informar estado de la cuenta
  informar() {
    console.log(
      `la cuenta de ${this.titular} contiene $${this.saldo} de saldo`
    );
  }
}

//cuenta.ingresar(saldo);
//let extraer = Number(prompt("Ingrese la cantidad a extraer:"));
//if (extraer > cuenta.saldo) {
//    console.log("No posee saldo suficiente");
//} else {
//    cuenta.extraer(extraer);
//}
//cuenta.informar();


//3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

//class Rectangulo {
  //  constructor(alto, ancho) {
   //     this.alto = alto;
   //     this.ancho = ancho;

   // }
   // mostrarPropiedades () {
   //     console.log (`el Alto es: ${this.alto}`);
   //     console.log (`el ancho es: ${this.ancho}`)
   // }
  //  calcularPerimetro () {
   //     return 2* (this.alto + this.ancho );
   // }
   // calcularArea() {
   //     return this.alto * this.ancho;
    //}
   // }
//const rectangulo1 = new Rectangulo (Number(prompt(`ingrese el alto del rectangulo`)),
//Number(prompt(`ingrese el ancho del rectangulo`)));
//rectangulo1.mostrarPropiedades();
//rectangulo1.calcularPerimetro();
//rectangulo1.calcularArea();
//console.log (`el perimetro del rectangulo es:` + rectangulo1.calcularPerimetro());
//console.log (`el area del rectangulo es:` + rectangulo1.calcularArea());

 
