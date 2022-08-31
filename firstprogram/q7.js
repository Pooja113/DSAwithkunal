// To calculate Fibonacci Series up to n numbers.

var fibo = function (num) {
  let firstNum = 0;
  let secondNum = 1;
  for (let i = 2; i <= num; i++) {
    let temp = secondNum;
    secondNum = firstNum+secondNum; 
    //console.log(secondNum)
    firstNum = temp;
  }
  return secondNum;
}

console.log(fibo(9))