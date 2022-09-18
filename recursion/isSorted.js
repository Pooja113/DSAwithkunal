var isSorted = function(num,start=0) {
  console.log(start)
      if (start==num.length-1) {
        return true;
      }
      return num[start]<num[start+1] && isSorted(num,start=start+1)
      // if(num[start]<num[start+1]){
      //     return isSorted(num,start=start+1)
      // }else{
      //   return false
      // }
  };

n = [1];
console.log(isSorted(n))  