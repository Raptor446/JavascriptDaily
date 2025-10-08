// Product of Array Except Self - https://leetcode.com/problems/product-of-array-except-self/

// Brute Force way -> T.C = O(n^2), S.C = O(1)
const productExceptSelfBruteForce = (nums) => {
    const n = nums.length
    const result = new Array(n)
    for (let i = 0; i < n; i++) {
        let currentProduct = 1
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                currentProduct *= nums[j]
            }
        }
        result[i] = currentProduct
    }
    return result
}
console.log(productExceptSelfBruteForce([1,2,3,4]))

// Optimised way -> T.C = O(n), S.C = O(1)
const productExceptSelfOptimal = (nums) => {
    const n = nums.length
    const answer = new Array(n).fill(1)
    for (let i = 1; i < n; i++) {
        answer[i] = nums[i - 1] * answer[i - 1];
    }
    let suffixProduct = 1
    for (let i = n - 1; i >= 0; i--) {
        answer[i] = answer[i] * suffixProduct
        suffixProduct = suffixProduct * nums[i]
    }
    return answer
}

console.log(productExceptSelfOptimal([-1,1,0,-3,3]))
