// Contains Duplicate - https://leetcode.com/problems/contains-duplicate/

// Brute Force way -> T.C = O(n^2), S.C = O(1)
const containsDuplicateBruteForce = (nums) => {
    const n = nums.length
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] === nums[j]) {
                return true
            }
        }
    }
    return false
}
console.log(containsDuplicateBruteForce([5,7,1,3]))

// Optimised way -> T.C = O(n), S.C = O(n)
const findDuplicates = (numbers) => {
    return (new Set(numbers)).size !== numbers.length
}

console.log(findDuplicates([10,7,0,0,9]))
