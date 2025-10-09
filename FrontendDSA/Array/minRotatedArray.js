// Find Minimum in Rotated Sorted Array - https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

// Brute Force way -> T.C = O(n), S.C = O(1)
const findMinLinear = (nums) => {
    // If the array is guaranteed to be non-empty, we can initialize with the first element.
    let minVal = nums[0] 
    for (const num of nums) {
        if (num < minVal) {
            minVal = num
        }
    }
    return minVal
}

console.log(findMinLinear([11,13,15,17]))

// Optimised way -> T.C = O(logn), S.C = O(1)
const findMinBinarySearch = (nums) => {
    let left = 0
    let right = nums.length - 1
    if (nums[left] <= nums[right]) {
        return nums[left]
    }
    while (left < right) {
        const mid = Math.floor((left + right) / 2)
        if (nums[mid] > nums[right]) {
            left = mid + 1 // minimum must be in the right half
        }
        else {
            right = mid // minimum is nums[mid] or somewhere to its left.
        }
    }
    return nums[left] // When left == right, we have found the minimum element's index so it can be nums[right] too.
}

console.log(findMinBinarySearch([4,5,6,7,0,1,2]))
