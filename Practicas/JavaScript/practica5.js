/*Queremos realizar cálculos usando funciones y obtener los resultados. Los requerimientos
son:
• Debe haber una función para cada número del 0 (”cero”) al 9 (”nueve”)
• Debe haber una función para cada una de las siguientes operaciones matemáticas:
suma, resta, multiplicación y división
• Cada cálculo consta exactamente de una operación y dos argumentos (números)
• La función externa representa el operando izquierdo, la función interna representa el
operando derecho
• La división debe ser una división entera. Por ejemplo, el resultado debería ser 2 y no
2.666666...
seven(times(five())); // debe devolver 35
four(plus(nine())); // debe devolver 13
eight(minus(three())); // debe devolver 5
six(dividedBy(two())); // debe devolver 3 */

function cero (){
    return 0;
}
function uno(){
    return 1;
}
function dos(){
    return 2;
}
function tres(){
    return 3;
}
function cuatro(){
    return 4;
}
function cinco(){
    return 5;
}
function seis(){
    return 6;
}
function siete(){
    return 7;
}
function ocho(){
    return 8;
}
function nueve(){
    return 9;
}

function times (a,b){
    return a*b;
}
function plus (a,b){
    return a+b;
}
function minus (a,b){
    return a-b;
}
function dividedBy (a,b){
    return a/b;
}

console.log(times(siete,cinco));