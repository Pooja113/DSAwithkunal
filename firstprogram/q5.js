// Take 2 numbers as input and print the largest number.

var greaterNum = function (a,b) {
  if (a<b) {
    return b
  }else{
    return a
  }
}
let num1=prompt("input number 1"),num2=prompt("input number 2");

console.log(greaterNum(num1,num2))