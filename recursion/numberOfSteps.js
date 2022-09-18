var numberOfSteps = function(num,count=0) {
  console.log(count)
      if (num==0) {
        return count;
      }
      if(Math.trunc(num%2)==0){
          return numberOfSteps(num/2,count=count+1)
      }else{
        return numberOfSteps(num-1,count=count+1)
      }
  };

n = 14
console.log(numberOfSteps(n))  