// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum =  0;
    let maxsum = nums[0];
    for(let i=0; i< nums.length;i++) {
        sum+=nums[i]
        if(sum > maxsum) {
            maxsum = sum
        }
        if(sum < 0) {
            sum = 0
        }
    }
    return maxsum
};

maxSubArray([-2,1,-3,4,-1,2,1,-5,4])