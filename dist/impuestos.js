"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Impuesto = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Impuesto = function Impuesto(num1, num2) {
  _classCallCheck(this, Impuesto);

  this.monto_bruto_anual = num1;
  this.deducciones = num2;
};

exports.Impuesto = Impuesto;