"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.size = 0;
  this.head = null; 
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function(value){
  let newNode = new Node(value);
  let conteiner = this.head;
  if(!conteiner){
    this.head = newNode;
    this.size++;
    return newNode;
  }
  while(conteiner.next){
    conteiner = conteiner.next;
  }
  conteiner.next = newNode;
  this.size++;
  return newNode;
}
LinkedList.prototype.remove = function(){
  let conteiner = this.head;
  if(this.head === null) return null;
  else if(conteiner.next === null){
    this.head = null;
    this.size--;
    return conteiner.value;
  }
  while(conteiner.next){
    if((conteiner.next).next === null){
      let eliminado = conteiner.next;
      conteiner.next = (conteiner.next).next;
      this.size--;
      return eliminado.value;
    }
    conteiner = conteiner.next;
  }

  
}
LinkedList.prototype.search = function(value){
  if(this.head === null) return null;
  let conteiner = this.head;
  if(typeof value === 'function'){
    if(value(this.head.value)){
      return this.head.value;
    }
    while(conteiner.next){
    if(value(conteiner.next.value)){
      return conteiner.next.value;
    }
    conteiner = conteiner.next;
  }

  }
  if(this.head.value === value){
    return this.head.value;
  }
  while(conteiner.next){
    if(conteiner.next.value === value){
      return conteiner.next.value;
    }
    conteiner = conteiner.next;
  }
  return null; 
}



/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.bucket = [];
  this.numBuckets = 35;
}

HashTable.prototype.hash = function(input){
  let suma = 0;
  for(let i=0;i < input.length;i++){
    suma += input.charCodeAt(i);
  }
  let position = suma % this.numBuckets;
  return position;
}
  
HashTable.prototype.set = function(clave, valor){
  if(typeof clave === 'string'){
   if(!this.bucket[this.hash(clave)]){
    this.bucket[this.hash(clave)] = {}
    this.bucket[this.hash(clave)][clave] = valor;
   }else{
    this.bucket[this.hash(clave)][clave] = valor; 
   }
  }
  else{
    throw new TypeError
  }
}

HashTable.prototype.get = function(clave){

  return this.bucket[this.hash(clave)][clave];
}
HashTable.prototype.hasKey = function(clave){
  let arr = Object.keys(this.bucket[this.hash(clave)]).toString();
  if(arr == clave){
    return true;
  } else {
    return false
  }

}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
