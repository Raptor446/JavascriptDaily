// Given an array and window size k, find the maximum sum of any contiguous subarray of size k
function maxSubarraySum(arr, k) {
  let maxSum = 0, windowSum = 0
  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i]
    if (i >= k - 1) {
      maxSum = Math.max(maxSum, windowSum)
      windowSum -= arr[i - k + 1]
    }
  }
  return maxSum
}

/* Easy and best without window size k
This is Kadane’s algorithm which says — at each step, either extend the subarray or start fresh. The global maximum will eventually hold the best possible sum. */
var maxSubArray = function(nums) {
    let currentSum = nums[0]
    let maxSum = nums[0]
    // Start from first element since we are using it to initialise
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i])
        maxSum = Math.max(currentSum, maxSum)
    }
    return maxSum
};

console.log(maxSubarraySum([2,1,5,1,3,2], 3)) // 9 ([5,1,3])
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6 ([4,-1,2,1])