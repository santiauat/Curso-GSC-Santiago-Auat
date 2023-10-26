var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var figuraGeometrica = /** @class */ (function () {
    function figuraGeometrica() {
    }
    figuraGeometrica.prototype.calculaPerimetro = function () {
        return 0;
    };
    figuraGeometrica.prototype.calculaArea = function () {
        return 0;
    };
    return figuraGeometrica;
}());
var cuadrado = /** @class */ (function (_super) {
    __extends(cuadrado, _super);
    function cuadrado(lado) {
        var _this = _super.call(this) || this;
        _this.lado = lado;
        _this.lado = lado;
        return _this;
    }
    cuadrado.prototype.calculaPerimetro = function () {
        return this.lado * 4;
    };
    cuadrado.prototype.calculaArea = function () {
        return this.lado * this.lado;
    };
    return cuadrado;
}(figuraGeometrica));
var circulo = /** @class */ (function (_super) {
    __extends(circulo, _super);
    function circulo(radio) {
        var _this = _super.call(this) || this;
        _this.radio = radio;
        _this.radio = radio;
        return _this;
    }
    circulo.prototype.calculaPerimetro = function () {
        return 2 * this.radio * Math.PI;
    };
    circulo.prototype.calculaArea = function () {
        return this.radio * this.radio * Math.PI;
    };
    return circulo;
}(figuraGeometrica));
// Polimorfismo
function calcularPerimetro(figura) {
    console.log("Perimetro: ", figura.calculaPerimetro());
    console.log("Area: ", figura.calculaArea());
}
var circ = new circulo(5);
var cua = new cuadrado(2);
console.log("Cuadrado:");
calcularPerimetro(cua);
console.log("Circulo:");
calcularPerimetro(circ);
