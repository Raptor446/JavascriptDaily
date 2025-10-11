// 3Sum - https://leetcode.com/problems/3sum/

// Brute Force way -> T.C = O(n^3), S.C = O(1)
const threeSumCubic = (nums) => {
    const n = nums.length
    const result = []
    const seen = new Set() // To handle duplicates, which adds complexity

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            for (let k = j + 1; k < n; k++) {
                if (nums[i] + nums[j] + nums[k] === 0) {
                    const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b)
                    const key = triplet.join(',')
                    if (!seen.has(key)) {
                        result.push(triplet)
                        seen.add(key)
                    }
                }
            }
        }
    }
    return result
}

console.log(threeSumCubic([-1,0,1,2,-1,-4]))

// Optimised way ->
/**
 * Time Complexity: O(n^2) (O(n log n) for sort + O(n^2) for two-pointers)
 * Space Complexity: O(log n) to O(n) (for sorting, depending on implementation)
 */
const threeSum = (nums) => {
    const n = nums.length
    if (n < 3) return []
    nums.sort((a, b) => a - b)
    const result = []
    for (let i = 0; i < n - 2; i++) {
        const a = nums[i]
        if (a > 0) break
        if (i > 0 && a === nums[i - 1]) continue
        let left = i + 1
        let right = n - 1
        while (left < right) {
            const sum = a + nums[left] + nums[right]
            if (sum === 0) {
                result.push([a, nums[left], nums[right]])
                while (left < right && nums[left] === nums[left + 1]) {
                    left++
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--
                }
                left++
                right--
            } else if (sum < 0) {
                left++
            } else {
                right--
            }
        }
    }
    return result
}

console.log(threeSum([0,1,1]))
