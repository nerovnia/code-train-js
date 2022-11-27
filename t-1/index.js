/*
  Return masked string
*/

function maskify(cc) {
  return cc.substring(cc.length-4).padStart(cc.length, '#');
}

console.log(maskify('4556364607935616'));
console.log(maskify('1'));
console.log(maskify('11111'));
