var subtractProductAndSum = function(n) {
  var product = 1 ;
  var sum = 0 ; 
     while(n > 0){
        var rem = n%10;
        product *= rem;
        sum += rem;
        n = parseInt(n/10) ;
    }
    return product - sum;
};

console.log(subtractProductAndSum(234))