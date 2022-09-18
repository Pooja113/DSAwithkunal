var countZero = function(n,count=0){
  if (n==0) {
    return count;
  }
  if (n%10==0) {
    count++
  }
  return countZero(Math.trunc(n/10),count)
}
n = 10
console.log(countZero(n))   

