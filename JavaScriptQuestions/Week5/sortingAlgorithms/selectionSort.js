/**
 * Time Complexity: O(n²) in all cases (worst, average, best)
 * Space Complexity: O(1) (in-place sorting)
 * Algorithm Steps (Ascending Order)
    Start with the first element as the current minimum.
    Scan the remaining array to find the smallest element.
    Swap the smallest element with the first element.
    Move to the next element and repeat until the array is sorted.
 */
function selectionSort(arr) {
  const n = arr.length

  // Outer loop iterates through the entire array, marking the start of the unsorted portion
  for (let i = 0; i < n - 1; i++) {
    // Assume the current element is the minimum
    let minIndex = i

    // Inner loop finds the true minimum element in the remaining unsorted subarray
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        // Found a new minimum
        minIndex = j
      }
    }

    // After the inner loop, minIndex holds the index of the smallest element.
    // Swap the smallest element with the element at the current position 'i'.
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
  }

  return arr
}

const numbers = [64, 25, 12, 22, 11]
console.log("Selection Sort:", selectionSort(numbers))
// Output: [11, 12, 22, 25, 64]