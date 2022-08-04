'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var con = 0;
  var resultado = 0;
  for(let i=num.length-1;i>=0;i--){
    resultado += (num[i] * Math.pow(2,con));
    con++; 
  }
  return resultado;
}

function DecimalABinario(num) {
  // tu codigo aca
  var resultado = '';
  var conver = '';
  while(num != 0){
    conver = (num % 2).toString();
    resultado = conver + resultado;  
    num = parseInt(num/2);
  }
  return resultado;
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}