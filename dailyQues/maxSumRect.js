var maxSumSubmatrix = function(matrix, k) {
  let rows=matrix.length, cols=matrix[0].length, res= -Infinity;
  
  for(let l=0;l<cols;l++){
     var sums = new Array(rows).fill(0);
     for(let r=l;r<cols;r++){
         for(let index=0;index<rows;index++){
           sums[index] += matrix[index][r]
         }
         for(let eachRow = 0; eachRow < rows; eachRow++) {
              let sum = 0;
              for (let eachCol = eachRow; eachCol < rows; eachCol++) {
                sum += sums[eachCol];
                if (sum > res && sum <= k) {
                  res = sum;
                }
              }
            }
     } 
  }

 return res
  
};

matrix=[[5,-4,-3,4],[-3,-4,4,5],[5,1,5,-4]]
k=10

console.log(maxSumSubmatrix(matrix,k))