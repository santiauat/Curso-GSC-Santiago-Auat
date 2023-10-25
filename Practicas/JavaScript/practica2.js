//Implemente su propia función find

function myFind(array, condicion){
    let valor = undefined;
for (let i = 0; i < array.length; i++) {
    
    if(condicion(array[i])){
        valor = array[i];
        break;
    }     
}
    return valor;
}

const array = [1, 2, 3, 4, 5];

const mayorquetres = myFind(array, function(num) {
    return num > 3;
  });

  console.log(mayorquetres);