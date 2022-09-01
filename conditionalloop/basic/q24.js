// Take integer inputs till the user enters 0 and print the sum of all numbers 

var sumNum = function() {
  let num;
  let sum = 0;
  while(num !=0) {
    num = parseInt(prompt("Enter a number"))
    sum += num
  }
  return sum 
};

console.log(sumNum())