//Input a number and print all the factors of that number

var factors = function(n) {
  let res = [];
  for (let i = 1; i <= n; i++) {
    if (n%i==0) {
      res.push(i)
    } 
  }
  return res;
};

console.log(factors(9))