// Take in two numbers and an operator (+, -, *, /) and calculate the value. (Use if conditions)

var calculations = function (a,b,op) {
  if (op=="+") {
    return a+b
  }
  if (op=="-") {
    return a-b
  }
  if (op=="*") {
    return a*b
  }
  if (op=="/") {
    return a/b
  }
}
let num1=32,num2=43;
let operator = "*"
console.log(calculations(num1,num2,operator))