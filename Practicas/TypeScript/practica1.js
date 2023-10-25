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
    pila.prototype.push = function (a) {
        this.elementos.push(a);
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
