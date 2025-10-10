// Search in Rotated Sorted Array - https://leetcode.com/problems/search-in-rotated-sorted-array/


// Brute Force way -> T.C = O(n), S.C = O(1)
const searchLinear = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i
        }
    }
    return -1
}

console.log(searchLinear([4,5,6,7,0,1,2], 0))

// Optimised way -> T.C = O(logn), S.C = O(1)
const search = (nums, target) => {
    let low = 0
    let high = nums.length - 1
    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2)
        if (nums[mid] === target) {
            return mid
        }
        if (nums[low] <= nums[mid]) {
            if (target >= nums[low] && target < nums[mid]) {
                high = mid - 1
            } else {
                low = mid + 1
            }

        } 
        else { 
            if (target > nums[mid] && target <= nums[high]) {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
    }
    return -1
}

console.log(search([4,5,6,7,0,1,2], 3))
