// Add val to all elements in the range [l, r]
function applyRangeUpdates(n, updates) {
  let diff = new Array(n + 1).fill(0)

  for (let [l, r, val] of updates) {
    diff[l] += val
    if (r + 1 < diff.length) diff[r + 1] -= val
  }

  let nums = new Array(n).fill(0)
  nums[0] = diff[0]
  for (let i = 1; i < n; i++) {
    nums[i] = nums[i - 1] + diff[i]
  }

  return nums
}
