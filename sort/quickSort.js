var quickSort = function(n,low,high){
  if (low >= high) {
    return
  }
  let start=low;
  let end=high;
  let mid = Math.trunc((start + end)/2);

   while (start<=end) {
     while (n[start] < n[mid]) {
         start++
      }
      while (n[end] > n[mid] ) {
        end--;
      } 
    if (start<=end) {
      let temp=n[start];
      n[start]=n[end];
      n[end]=temp
      start++;
      end--;
    }
   }
  quickSort(n,low,end);
  quickSort(n,start,high);
  return n

}

n = [5,4,3,1,2];
console.log(quickSort(n,0,n.length-1))
