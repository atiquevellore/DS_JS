

var missingNumber = function(nums) {
    let sum =0;
    let n = nums.length
    for(let i=0; i< nums.length;i++) {
        sum+=nums[i];
    }
    console.log(n)
    console.log( (n*(n+1))/2 )
    return  (n*(n+1))/2 - sum
};

missingNumber([9,6,4,2,3,5,7,0,1])