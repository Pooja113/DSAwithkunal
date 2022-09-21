
var mergeSort = function(n,start,end){
  if (end-start==1 ) {
    return;
  }
  let mid = Math.trunc((start + end)/2);

  mergeSort(n,start,mid);
  mergeSort(n,mid,end);
  //Merge Left and Right halves
  let mix=[]; 
   let i = start;
   let j=mid;
   let l=0
  while (i < mid && j < end) {
    if (n[i]<n[j]) {
      mix[l] = n[i]
      i++;
    }else{
      mix[l] = n[j]
      j++;
    }
    l++;
    }

    while (i < mid ) {
        mix[l] = n[i]
        i++;
        l++;
      }
    while (j < end ) {
        mix[l] = n[j]
        j++;
        l++;
    } 
    for (let k = 0; k < end-start; k++) {
      n[start+k]=mix[k] 
    }
}

n = [5,4,3,2,-1];
console.log(mergeSort(n,0,n.length))  

console.log(n)