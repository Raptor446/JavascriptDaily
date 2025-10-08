// Two Sum - https://leetcode.com/problems/two-sum/

// Brute Force way -> T.C = O(n^2), S.C = O(1)
const twoSumBruteForce = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
    return []
}
console.log(twoSumBruteForce([2,7,11,15], 9))

// Optimised way ->  T.C = O(n), S.C = O(n) - We store at most n elements in the hash map.
const twoSum = (nums, target) => {
    const map = new Map()
    let result = []
    nums.forEach((num, index) => {
        const complement = target - num
        if (map.has(complement)) {
            result = [map.get(complement), index]
            return
        }
        map.set(num, index)
    })
    return result
}

console.log(twoSum([2,7,11,15], 18))
