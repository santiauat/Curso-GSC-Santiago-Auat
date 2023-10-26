/*Crear una clase que represente una pila (LIFO). Dicha clase debe tener los siguientes métodos:
• Agregar elementos a la pila push
• Sacar elementos de la pila pop
• Consultar la cantidad de elementos size */

class pila<T> {
 elementos: T[] = [];
 constructor(){
    this.elementos = [];
     }

     //Agregar elementos a la pila push
 push(elemento: T): void {
    this.elementos.push(elemento);
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


class pilaSinRepetidos<T>{
    
    elementos: T[] = [];
    
   
        //Agregar elementos a la pila push
    push(elemento:T): void {
       if(this.elementos.indexOf(elemento) === -1){
        this.elementos.push(elemento);
       }
    }

       //Sacar elementos de la pila pop
   pop(): void{
       this.elementos.pop();
   }
   
   size(): number{
       return this.elementos.length;
   }
}
