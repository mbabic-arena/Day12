// Only change code below this line
function sumFibonacci(num) {
  // Only change code below this line
  if (num < 0) {
    return 0;
  } else if (num <= 1) return 1;
  var myFib = [];
  myFib[0] = 1;
  myFib[1] = 1;
  for (var i = 2; i <= num; i++) {
    myFib[i] = myFib[i - 2] + myFib[i - 1];
  }
  myFib = myFib.filter(function (val) {
    return val % 2 !== 0 && val <= num;
  });
  myFib = myFib.reduce(function (a, b) {
    return a + b;
  });
  return myFib;
}
// Only change code above this line

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci; // Change this line
