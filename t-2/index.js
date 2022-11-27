/*
  Sum of odd numbers 
*/

function rowSumOddNumbers_v1(n) {
  
  let sum = 0;
  let y = 1;
  for(let i = 1;i <= n;i++) {
    y += 2 * i - 2;
  }
  for(let i = 0;i < n;i++) {
    sum += y + i*2;
  }
  return sum;

}

function rowSumOddNumbers_v2(n) {
  return Math.pow(n, 3);
}

function rowSumOddNumbers_v3(n) {
  return n**3;
}


console.log(rowSumOddNumbers(1));
console.log(rowSumOddNumbers(3));
console.log(rowSumOddNumbers(42));
