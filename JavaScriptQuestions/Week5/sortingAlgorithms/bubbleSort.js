/**
 * Time Complexity: O(n²) in all cases (worst, average, best)
 * Space Complexity: O(1) (in-place sorting)
 * Algorithm Steps:
    Start from the first element of the array.
    Compare it with the next element.
    If the first is greater than the second (for ascending order), swap them.
    Move to the next pair.
    Repeat for the whole array → largest element moves to the end.
    Repeat the whole process for remaining elements.
 */
function bubbleSortBasic(arr) {
  const n = arr.length
  let swapped

  // Outer loop controls the number of passes needed (n-1 passes)
  for (let i = 0; i < n - 1; i++) {
    swapped = false // Reset the flag at the start of each pass

    // Inner loop handles the comparisons and swaps for the current pass
    // We do 'n - i - 1' because the last 'i' elements are already in place
    for (let j = 0; j < n - i - 1; j++) {
      // Compare adjacent elements
      if (arr[j] > arr[j + 1]) {
        // Swap them if they are in the wrong order
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        swapped = true // Mark that a swap occurred
      }
    }

    // Optimization check: If no two elements were swapped 
    // in the inner loop, the array is already sorted.
    if (swapped === false) {
      break
    }
  }
  return arr
}

const numbers = [5, 1, 4, 2, 8]
console.log("Basic Bubble Sort:", bubbleSortBasic(numbers)) 
// Output: [1, 2, 4, 5, 8]