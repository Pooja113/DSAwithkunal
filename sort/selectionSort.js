n = [2,1,-5,-4,-3];
//let min=n[0];
var selectionSort = function(n,i){
  if (i==n.length) {
    return n;
  }
  min = selectMin(n,i,0,0)
  console.log(min)
  // let temp = n[n.length-1];
  // n[n.length-1]=n[i];
  // n[i]=temp;
  // console.log(n)
  // return selectionSort(n,i=i+1)
  
}

var selectMin = function(n,i,j,min){
  if (j==n.length-1) {
    return min;
  }
  if (n[j]<n[j+1]) {
    console.log(j)
    return selectMin(n,i,j=j+1,j)
  }
  return selectMin(n,i,j=j+1,min)
}


console.log(selectionSort(n,0))  
