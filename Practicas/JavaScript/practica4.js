// Implemente su propia función reduce
function myReduce(array, funcion){
    let acumulados = 0;
    array.forEach(element => {
        acumulados = acumulados + element;
    });
return acumulados;
}

const array = [1, 2, 3, 4, 5];

const sumaTot = myReduce(array, function(num) {
    return num;
  });

  console.log(sumaTot); 