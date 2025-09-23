/*
Problem: Largest Rectangle in Histogram
You are given an array heights where each element represents the height of a bar in a histogram.
Return the area of the largest rectangle in the histogram.
*/
/*
Brute Force (Worst)
Try all possible subarrays [i..j], take min height in that range, compute area.
Time: O(n²) (nested loops).
Space: O(1).
*/
function largestRectangleBrute(heights) {
  let n = heights.length
  let maxArea = 0

  for (let i = 0; i < n; i++) {
    let minHeight = Infinity
    for (let j = i; j < n; j++) {
      minHeight = Math.min(minHeight, heights[j])
      maxArea = Math.max(maxArea, minHeight * (j - i + 1))
    }
  }
  return maxArea
}

/*
Use a stack to maintain increasing heights.
When current bar is lower than stack top → pop until valid, compute area.
Each bar is pushed/popped at most once.
Time: O(n) (each element push+pop once).
Space: O(n) for stack.
*/
function largestRectangle(heights) {
  let stack = []
  let maxArea = 0
  heights.push(0) // Sentinel to flush stack

  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      let height = heights[stack.pop()]
      let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1
      maxArea = Math.max(maxArea, height * width)
    }
    stack.push(i)
  }

  return maxArea
}
