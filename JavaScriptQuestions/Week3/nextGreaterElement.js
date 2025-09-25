// Brute Force - For each element, scan all elements to its right until you find a bigger one.
function nextGreaterBrute(nums) {
  let res = []
  for (let i = 0; i < nums.length; i++) {
    let next = -1
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        next = nums[j]
        break
      }
    }
    res.push(next)
  }
  return res
}

/* Monotonic Stack (Best)
Use a stack to keep track of candidates for next greater elements.

Steps
Traverse array from right → left (reverse order).
Maintain a stack where elements are strictly decreasing.
For each element:
Pop smaller/equal elements (they can’t be "next greater").
If stack not empty → top is the next greater element.
Push current element onto stack. */
function nextGreater(nums) {
  let n = nums.length
  let res = new Array(n).fill(-1)
  let stack = []

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= nums[i]) {
      stack.pop()
    }
    if (stack.length > 0) {
      res[i] = stack[stack.length - 1]
    }
    stack.push(nums[i])
  }

  return res
}
