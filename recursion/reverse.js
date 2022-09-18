var rev = function(n){
  let len = Math.ceil(Math.log10(n + 1));

  if (n==0) {
   
    return 0; 
  }
  //console.log((n%10) * Math.pow(10,len-1))
  return  (Math.trunc(n%10)) * Math.pow(10,len-1) + Math.trunc(rev(n/10));
}
n = 13710597
console.log(rev(n))   
//679,927
