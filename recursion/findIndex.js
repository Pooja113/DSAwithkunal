let res=[]
var findIndex = function(num,start,target) {
  if (start==num.length) {
    return res;
  }
  if (num[start]==target) {
    res.push(start)
  }
  return findIndex(num,start=start+1,target)
};

n = [1,2,3,3,3,4];
target = 3
console.log(findIndex(n,0,target))  