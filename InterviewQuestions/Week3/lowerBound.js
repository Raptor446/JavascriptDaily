// This is also known as Index Search

// Brute Force
function lowerBoundLinear(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= target) {
      return i // Found the first element >= target
    }
  }
  return arr.length // No such element found
}

const arr = [2, 5, 8, 12, 16]
console.log(lowerBoundLinear(arr, 8)) // Output: 2
console.log(lowerBoundLinear(arr, 9)) // Output: 3 (since 12 is the first >= 9)
console.log(lowerBoundLinear(arr, 20)) // Output: 5 (all elements are smaller)

// Optimized Approach using Binary Search
function lowerBoundBinary(arr, target) {
  let low = 0
  let high = arr.length - 1
  let ans = arr.length // Default to arr.length if no element is found

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)

    if (arr[mid] >= target) {
      ans = mid         // Found a potential answer
      high = mid - 1    // Try to find a smaller index in the left half
    } else {
      low = mid + 1     // Discard this half, search in the right
    }
  }

  return ans
}

const sortedArr = [2, 5, 8, 12, 16]
console.log(lowerBoundBinary(sortedArr, 8))  // Output: 2
console.log(lowerBoundBinary(sortedArr, 9))  // Output: 3
console.log(lowerBoundBinary(sortedArr, 20)) // Output: 5