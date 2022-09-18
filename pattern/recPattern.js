var recPattern = function(row,col,n){
  if (row==n) {
    return;
  }
  if (col==n-row) {
    console.log()
    return recPattern(row=row+1,0,n)
  }
  process.stdout.write("* ");
  return recPattern(row,col=col+1,n)
}
n = 5
recPattern(0,0,n)
//679,927
