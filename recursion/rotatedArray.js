var rotatedArray = function(num,start,end,target) {
  if (start>end) {
    return -1;
  }
  let mid= Math.trunc((start+end)/2);
  if (num[mid]==target) {
    return mid
  }
  if (num[mid]>=num[start]) {
    if (target>=num[start]&&target<=num[mid]) {
      return rotatedArray(num,start,mid-1,target)
    }else{
      return rotatedArray(num,mid+1,end,target)
    }
  }else{
    if (target<=num[start]&&target>num[mid]) {
      return rotatedArray(num,mid+1,end,target)
    }else{
      end=mid-1
      return rotatedArray(num,start,mid-1,target)
    }
  }
};

nums = [5,6,7,8,1,2,3,4];
target = 7
console.log(rotatedArray(nums,0,nums.length-1,target))  