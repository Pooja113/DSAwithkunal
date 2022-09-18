var bubbleSort = function(n,i,j){
  if (i==n.length) {
    return n;
  }
  if (j==n.length-i) {
    return bubbleSort(n,i=i+1,0)
  }
  if (n[j]>n[j+1]) {
    let temp = n[j];
    n[j]=n[j+1];
    n[j+1]=temp
  }
  return bubbleSort(n,i,j=j+1)
}
n = [2,1,-5,4,3];
console.log(bubbleSort(n,0,0))  
