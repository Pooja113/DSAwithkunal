// Input currency in rupees and output in USD.

var rupeeTousd = function (amount) {
  return "$" + (amount/79.46);
}
let rupee= 500000;

console.log(rupeeTousd(rupee))