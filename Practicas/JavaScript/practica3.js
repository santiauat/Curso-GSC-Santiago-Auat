// Implemente su propia función filter

  function myFilter(array, condicion){
    const valores= [];
    array.forEach(element => {
        
        if(condicion(element)){
            valores.push(element);
        }
    });
    return valores;
  }


const array = [1, 2, 3, 4, 5];

const mayoresquetres = myFilter(array, function(num) {
    return num > 3;
  });

  console.log(mayoresquetres); 
