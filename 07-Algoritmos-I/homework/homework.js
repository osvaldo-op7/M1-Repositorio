'use strict'

const { arrayReplaceAt } = require("markdown-it/lib/common/utils");

// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let array = [1];
  let div = 2;
  while(num > 1){
    if(num%div === 0){
      array.push(div)
      num /= div;
    }else{
      div++;
    }
  }
  return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:  
  for (var i = 0; i < array.length; i++) { 
        for (var j = 0; j < (array.length - i - 1); j++) { 
                 if(array[j] > array[j+1]) {
                    var tmp = array[j]; 
                    array[j] = array[j+1]; 
                    array[j+1] = tmp; 
          }
      }        
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  const l = array.length;
  let j, temp;

  for ( let i = 1; i < l; i++ ) {
    j = i;
    temp = array[ i ];
    while ( j > 0 && array[ j - 1 ] > temp ) {
      array[ j ] = array[ j - 1 ];
      j--;
    }
    array[ j ] = temp;
  }

  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var size = array.length,
      slot,
      tmp;
 
  for ( var item = 0; item < size; item++ ) { 
    tmp = array[item];
    for ( slot = item - 1; slot >= 0 && array[slot] > tmp; slot-- ){ 
      array[ slot + 1 ] = array[slot];
    }
    array[ slot + 1 ] = tmp;
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
