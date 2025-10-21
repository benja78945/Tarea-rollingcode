class Cuenta {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }

  ingresar(monto) {
    this.saldo += monto;
    console.log(`Ingresaste $${monto}. Nuevo saldo: $${this.saldo}`);
  }

  extraer(monto) {
    if (monto <= this.saldo) {
      this.saldo -= monto;
      console.log(`Retiraste $${monto}. Saldo restante: $${this.saldo}`);
    } else {
      console.log("Fondos insuficientes 😅");
    }
  }

  informar() {
    console.log(`Titular: ${this.titular}, Saldo: $${this.saldo}`);
  }
}