// To find out whether the given String is Palindrome or not.
var palindrome = function (str) {
  let start = 0;
  let end = str.length-1;
  let len = Math.trunc(end / 2);
  while (start<=len) {
    if (str[start]==str[end]) {
      start++;
      end--
    }else{
      return false
    }
    
  }
  return true;
}
console.log(palindrome("aab"))