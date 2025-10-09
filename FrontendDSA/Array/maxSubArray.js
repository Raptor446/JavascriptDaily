// Maximum Subarray - https://leetcode.com/problems/maximum-subarray/

// Brute Force way -> T.C = O(n^2), S.C = O(1)
const maxSubArrayBruteForce = (nums) => {
    let maxSum = nums[0]
    const n = nums.length
    for (let i = 0; i < n; i++) {
        let currentSum = 0
        for (let j = i; j < n; j++) {
            currentSum += nums[j]
            if (currentSum > maxSum) {
                maxSum = currentSum
            }
        }
    }
    return maxSum
}

console.log(maxSubArrayBruteForce([-2,1,-3,4,-1,2,1,-5,4]))

// Optimised way(Kadane's Algorithm) -> T.C = O(n), S.C = O(1)
const maxSubArrayOptimised = (nums) => {
    const n = nums.length
    if (n === 0) return 0
    let maxEndingHere = nums[0]
    let maxSoFar = nums[0]
    for (let i = 1; i < n; i++) {
        maxEndingHere = Math.max(nums[i], nums[i] + maxEndingHere)
        maxSoFar = Math.max(maxEndingHere, maxSoFar)
    }
    return maxSoFar
}

console.log(maxSubArrayOptimised([5,4,-1,7,8]))
