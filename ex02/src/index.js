// Only change code below this line
function myCounter(n) {
  if (n < 1) {
    return [];
  } else {
    const countArr = myCounter(n - 1);
    countArr.unshift(n);
    return countArr;
  }
}
myCounter(-1);
// Only change code above this line
console.log(myCounter(-1));
console.log(myCounter(10));
console.log(myCounter(5));
// Change this line
module.exports = myCounter;
