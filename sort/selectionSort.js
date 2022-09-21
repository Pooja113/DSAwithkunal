//let min=n[0];
var selectionSort = function(n,i){
  if (i==0) {
    return n;
  }
  max = selectMax(n,0,i,0)
  let temp = n[max];
  n[max]=n[i];
  n[i]=temp;
  return selectionSort(n,i=i-1)

}

var selectMax = function(n,max,i,j){
  if (j==i+1) {
    return max;
  }
  if (n[j] > n[max]) {
    return selectMax(n,max=j,i,j=j+1)
  }
  return selectMax(n,max,i,j=j+1)
}

n = [2,-1,5,4,-3];

console.log(selectionSort(n,n.length-1))  
