// Use a prefix sum and a hashmap to count how many times each prefix sum occurs.
function subArraySum(nums, k) {
    let count = 0
    let prefixSum = 0
    let map = { 0: 1 } // base case: prefixSum 0 appears once
    for (let num of nums) {
        prefixSum += num
        if (map[prefixSum - k]) {
            count += map[prefixSum -k]
        }
        map[prefixSum] = (map[prefixSum] || 0) + 1
    }
    return count
}

console.log(subArraySum([1,2,3], 3)) // 2([1,2], [3])