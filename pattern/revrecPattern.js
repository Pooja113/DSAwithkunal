var revrecPattern = function(row,col,n){
  if (row==n) {
    return;
  }
  if (col==row) {
    console.log()
    return revrecPattern(row=row+1,0,n)
  }
  process.stdout.write("* ");
  return revrecPattern(row,col=col+1,n)
}
n = 5
revrecPattern(0,0,n)
//679,927
