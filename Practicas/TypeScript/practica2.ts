class figuraGeometrica{
    constructor(){
    }

    calculaPerimetro(): number{
        return 0;
    }
    calculaArea(): number{
        return 0;
    }
}

class cuadrado extends figuraGeometrica {
    
    constructor(private lado: number){
        super();
        this.lado = lado;
    }

    calculaPerimetro(): number {
        return this.lado * 4;
    }

    calculaArea(): number {
        return this.lado * this.lado;
    }
}

class circulo extends figuraGeometrica {
    constructor(private radio: number){
        super();
        this.radio = radio;
    }

    calculaPerimetro(): number {
        return 2 * this.radio * Math.PI;
    }

    calculaArea(): number {
        return this.radio * this.radio * Math.PI;
    }
}

// Polimorfismo
function calcularPerimetro(figura: figuraGeometrica){
console.log("Perimetro: ", figura.calculaPerimetro());
console.log("Area: ", figura.calculaArea());
}

const circ = new circulo(5);
const cua = new cuadrado(2);

console.log("Cuadrado:");
calcularPerimetro(cua);

console.log("Circulo:");
calcularPerimetro(circ);
