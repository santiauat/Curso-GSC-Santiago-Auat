// Implemente su propia función map

function miMapa(array, funcion){
const valores = [];
array.forEach(element => {
        valores.push(funcion(element));
});

return valores;
}

const array = [1, 2, 3, 4, 5];

const numerosSumadosUno = miMapa(array, function(arr) {
    return arr + 1;
  });

  console.log(numerosSumadosUno);
