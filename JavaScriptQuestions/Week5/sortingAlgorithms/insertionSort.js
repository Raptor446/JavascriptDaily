/**
 * Time Complexity: O(n²) in the worst/average case, O(n) in the best case.
 * Space Complexity: O(1) (in-place sorting).
 * Algorithm Steps (Ascending Order)
    Assume the first element is already sorted.
    Pick the next element from the unsorted part.
    Compare it with elements in the sorted part and shift all larger elements one position to the right.
    Insert the picked element in its correct position.
    Repeat until the whole array is sorted.
 */
function insertionSort(arr) {
  const n = arr.length

  // The outer loop iterates through the unsorted part of the array, starting from the second element.
  for (let i = 1; i < n; i++) {
    let current = arr[i] // The element to be inserted into the sorted subarray
    let j = i - 1        // Start comparing with the last element of the sorted subarray

    // The inner loop shifts elements in the sorted subarray to the right 
    // to make space for the 'current' element.
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j] // Shift element to the right
      j--                 // Move to the next element on the left
    }

    // Insert the 'current' element into its correct, open position
    arr[j + 1] = current
  }
  return arr
}

const numbers = [12, 11, 13, 5, 6]
console.log("Insertion Sort:", insertionSort(numbers))
// Output: [5, 6, 11, 12, 13]