// Maximum Product Subarray - https://leetcode.com/problems/maximum-product-subarray/

// Brute Force way -> T.C = O(n^2), S.C = O(1)
const maxProductSubarrayBruteForce = (nums) => {
    let maxProduct = nums[0]
    const n = nums.length
    for (let i = 0; i < n; i++) {
        let currentProduct = 1
        for (let j = i; j < n; j++) {
            currentProduct *= nums[j]
            maxProduct = Math.max(maxProduct, currentProduct)
        }
    }
    return maxProduct
}

console.log(maxProductSubarrayBruteForce([2,3,-2,4]))

// Optimised way(Dynamic Programming: Tracking Min and Max Products) -> T.C = O(n), S.C = O(1)
const maxProductSubarrayOptimised = (nums) => {
    let result = nums[0], maxProduct = nums[0], minProduct = nums[0]
    for (let i = 1; i < nums.length; i++) {
        const prevMax = maxProduct
        maxProduct = Math.max(nums[i], nums[i] * prevMax, nums[i] * minProduct)
        minProduct = Math.min(nums[i], nums[i] * prevMax, nums[i] * minProduct)
        result = Math.max(result, maxProduct)
    }
    return result
}

console.log(maxProductSubarrayOptimised([-2,0,-1]))
