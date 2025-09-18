// Find indices of two numbers in an array that add up to the target.
function twoSum(nums, target) {
    const numMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]
        if(numMap.has(complement)) {
            return [numMap.get]
        }
        numMap.push(complement)
    }
}

// Easy way for sorted array this is two pointer method
function twoSumSorted(arr, target) {
  let left = 0, right = arr.length - 1
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === target) {
        return [left, right]
    }
    if (sum < target) {
        left++
    } else right--
  }
  return null;
}
console.log(twoSumSorted([2,7,11,15], 9)) // [0,1]
console.log(twoSumSorted([3,2,4], 6)) // [1,2]
console.log(twoSumSorted([-1,0], -1)) // [0,1]