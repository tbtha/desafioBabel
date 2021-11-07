export class Cliente{
    constructor(nombre,impuesto = {}){
        this.nombre = nombre;
        this.impuesto = impuesto
    }
    set setImpuesto (impuesto){
        this.impuesto = impuesto
    }
    get getImpuesto (){
        return this.impuesto
    }
    calcularImpuesto(){
        return ((this.getImpuesto.monto_bruto_anual - this.getImpuesto.deducciones) * .21)
    }
   
}
