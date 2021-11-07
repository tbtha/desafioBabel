"use strict";

var _cliente = require("./cliente.js");

var _impuestos = require("./impuestos.js");

//hacerlo dinamico 
var botton = document.querySelector("#boton");
var nombreIngresado = document.querySelector("#nombre");
var resultado = document.querySelector("#resultado");
var montoBruto = document.querySelector("#montoBruto");
var deDu = document.querySelector("#deducciones"); //  clientes dinamicos

botton.addEventListener('click', function () {
  var cliente0 = new _cliente.Cliente(nombreIngresado.value);
  var impCliente0 = new _impuestos.Impuesto(montoBruto.value, deDu.value);
  cliente0.setImpuesto = impCliente0;
  console.log(cliente0);
  resultado.innerHTML = " Cliente ".concat(cliente0.nombre, " impuesto a pagar ").concat(cliente0.calcularImpuesto());
}); //clientes ya creados

var cliente1 = new _cliente.Cliente("Juan");
var impCliente1 = new _impuestos.Impuesto(550588, 110000);
cliente1.setImpuesto = impCliente1;
console.log(cliente1);
console.log("Cliente ".concat(cliente1.nombre, " impuesto a pagar ").concat(cliente1.calcularImpuesto()));
var cliente2 = new _cliente.Cliente("Maria");
var impCliente2 = new _impuestos.Impuesto(5986528, 1510000);
cliente2.setImpuesto = impCliente2;
console.log(cliente2);
console.log("Cliente ".concat(cliente2.nombre, " impuesto a pagar ").concat(cliente2.calcularImpuesto()));
var cliente3 = new _cliente.Cliente("Paolo");
var impCliente3 = new _impuestos.Impuesto(5896426, 2548695);
cliente3.setImpuesto = impCliente3;
console.log(cliente3);
console.log("Cliente ".concat(cliente3.nombre, " impuesto a pagar ").concat(cliente3.calcularImpuesto()));
var cliente4 = new _cliente.Cliente("Hugo");
var impCliente4 = new _impuestos.Impuesto(5896426, 2548695);
cliente4.setImpuesto = impCliente4;
console.log(cliente4);
console.log("Cliente ".concat(cliente4.nombre, " impuesto a pagar ").concat(cliente4.calcularImpuesto()));