/*Crear una clase que represente una pila (LIFO). Dicha clase debe tener los siguientes métodos:
• Agregar elementos a la pila push
• Sacar elementos de la pila pop
• Consultar la cantidad de elementos size */

class pila {
 elementos: number[] = [];
 constructor(){
    this.elementos = [];
     }

     //Agregar elementos a la pila push
 push(a:number): void {
    this.elementos.push(a);
 }
    //Sacar elementos de la pila pop
pop(): void{
    this.elementos.pop();
}

size(): number{
    return this.elementos.length;
}
}

const mipila = new pila();
mipila.push(1);
mipila.push(2);
mipila.push(3);
mipila.push(4);
mipila.push(5);

mipila.pop();
console.log(mipila.pop());
console.log(mipila.size());
