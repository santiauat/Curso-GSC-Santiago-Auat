/*Crear una clase que represente una pila (LIFO). Dicha clase debe tener los siguientes métodos:
• Agregar elementos a la pila push
• Sacar elementos de la pila pop
• Consultar la cantidad de elementos size */
var pila = /** @class */ (function () {
    function pila() {
        this.elementos = [];
        this.elementos = [];
    }
    //Agregar elementos a la pila push
    pila.prototype.push = function (elemento) {
        this.elementos.push(elemento);
    };
    //Sacar elementos de la pila pop
    pila.prototype.pop = function () {
        this.elementos.pop();
    };
    pila.prototype.size = function () {
        return this.elementos.length;
    };
    return pila;
}());
var mipila = new pila();
mipila.push(1);
mipila.push(2);
mipila.push(3);
mipila.push(4);
mipila.push(5);
mipila.pop();
console.log(mipila.pop());
console.log(mipila.size());




var pilaSinRepetidos = /** @class */ (function () {
    function pilaSinRepetidos() {
        this.elementos = [];
    }
    //Agregar elementos a la pila push
    pilaSinRepetidos.prototype.push = function (elemento) {
        if (this.elementos.indexOf(elemento) === -1) {    //Devuelve el índice de la ocurrencia encontrada, de lo contrario -1 si no se encuentra
            this.elementos.push(elemento);
        }
    };
    //Sacar elementos de la pila pop
    pilaSinRepetidos.prototype.pop = function () {
        this.elementos.pop();
    };
    pilaSinRepetidos.prototype.size = function () {
        return this.elementos.length;
    };
    return pilaSinRepetidos;
}());

const pilaUnicos = new pilaSinRepetidos();
pilaUnicos.push(1);
pilaUnicos.push(2);
pilaUnicos.push(1); 


console.log(pilaUnicos.size()); 