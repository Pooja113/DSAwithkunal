//To find Armstrong Number between two given number.

var armstrong = function (a) {
  let sum = 0;
  let num = a
  while (a>0) {
    rem = a%10;
    let cube=rem*rem*rem;
    sum += cube;
    console.log(sum)
    a= Math.trunc(a/10);
  }

  if (sum==num) {
    return true
  }else{
    return false
  }
}
console.log(armstrong(153))