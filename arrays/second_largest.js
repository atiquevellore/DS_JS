
function secondlargest(nums) {
    let largest = Number.NEGATIVE_INFINITY;
    let secondlargest = Number.NEGATIVE_INFINITY;

    for(let i=0; i< nums.length;i++) {

        if(nums[i] > largest) {
            secondlargest = largest;
            largest = nums[i]
        }

        if( nums[i] > secondlargest && nums[i] < largest ) {
            secondlargest = nums[i]
        }
    }

    return secondlargest;
}

console.log("second largest number", secondlargest([12,35,1,10,34,1]))
console.log("second largest number", secondlargest([-1,-2,-3]))