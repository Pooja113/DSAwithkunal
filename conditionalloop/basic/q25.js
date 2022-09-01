// Take integer inputs till the user enters 0 and print the largest number from all


var largerNumber = function() {
  let num;
  let max = 0;
  while(num!=0) {
    num = parseInt(prompt("Enter a number"))
    if (num>max) {
      max=num
    }
  }
  return max 
};

console.log(largerNumber())