// Container With Most Water - https://leetcode.com/problems/container-with-most-water/

// Brute Force way -> T.C = O(n^2), S.C = O(1)
const maxAreaQuadratic = (height) => {
    let maxArea = 0
    const n = height.length
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const width = j - i
            const h = Math.min(height[i], height[j])
            const currentArea = width * h
            maxArea = Math.max(maxArea, currentArea)
        }
    }
    return maxArea
}

console.log(maxAreaQuadratic([1,8,6,2,5,4,8,3,7]))

// Optimised way -> T.C = O(n), S.C = O(1)
const maxArea = (height) => {
    let maxArea = 0
    let low = 0
    let high = height.length - 1
    while (low < high) {
        const width = high - low
        const h = Math.min(height[low], height[high])
        const currentArea = width * h
        maxArea = Math.max(maxArea, currentArea)
        if (height[low] < height[high]) {
            low++
        } else {
            high-- 
        }
    }
    return maxArea
}

console.log(maxArea([1,1]))
