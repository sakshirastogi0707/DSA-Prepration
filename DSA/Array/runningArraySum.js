// 1480. Running Sum of 1d Array
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.


var runningSum = function (nums) {
  let sum = [];
  sum[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sum[i] = nums[i] + sum[i - 1];
    console.log((sum[i] = nums[i] + sum[i - 1]));
    console.log(nums[i] + sum[i - 1], "sum[i] ");
  }

  return sum;
};

console.log(runningSum([1, 1, 1, 1, 1]));
