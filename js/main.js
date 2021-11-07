import {Cliente} from "./cliente.js"
import { Impuesto } from "./impuestos.js";


//hacerlo dinamico 
const botton = document.querySelector("#boton")
const nombreIngresado = document.querySelector("#nombre")
const resultado = document.querySelector("#resultado")
const montoBruto = document.querySelector("#montoBruto");
const deDu = document.querySelector("#deducciones");

//  clientes dinamicos
botton.addEventListener('click', () =>{
    const cliente0 = new Cliente(nombreIngresado.value)
    const impCliente0 = new Impuesto (montoBruto.value , deDu.value);
    cliente0.setImpuesto = impCliente0

    console.log(cliente0)
    resultado.innerHTML = ` Cliente ${cliente0.nombre} impuesto a pagar ${cliente0.calcularImpuesto()}`

} )




//clientes ya creados

const cliente1 = new Cliente("Juan")
const impCliente1 = new Impuesto (550588 , 110000);
cliente1.setImpuesto = impCliente1
console.log(cliente1)

console.log(`Cliente ${cliente1.nombre} impuesto a pagar ${cliente1.calcularImpuesto()}`)

const cliente2 = new Cliente("Maria")
const impCliente2 = new Impuesto (5986528 , 1510000);
cliente2.setImpuesto = impCliente2
console.log(cliente2)

console.log(`Cliente ${cliente2.nombre} impuesto a pagar ${cliente2.calcularImpuesto()}`)

const cliente3 = new Cliente("Paolo")
const impCliente3 = new Impuesto (5896426 , 2548695);
cliente3.setImpuesto = impCliente3
console.log(cliente3)

console.log(`Cliente ${cliente3.nombre} impuesto a pagar ${cliente3.calcularImpuesto()}`)

const cliente4 = new Cliente("Hugo")
const impCliente4 = new Impuesto (5896426 , 2548695);
cliente4.setImpuesto = impCliente4
console.log(cliente4)

console.log(`Cliente ${cliente4.nombre} impuesto a pagar ${cliente4.calcularImpuesto()}`)