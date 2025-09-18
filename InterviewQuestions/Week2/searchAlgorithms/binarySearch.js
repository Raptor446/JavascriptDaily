// Array must be sorted for this

// 1. Iterative Implementation
function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1
    while (left <= right) {
        let mid = Math.floor((left + right)/2)
        if(arr[mid] === target) {
            return mid
        } else if (arr[mid] < target) {
            left = mid + 1 // search right half
        } else {
            right = mid - 1 // search left half
        }
    }
    return -1
}

console.log(binarySearch([10, 20, 30, 40, 50], 30)) // 2
console.log(binarySearch([10, 20, 30, 40, 50, 60], 50)) // 4

// 2.Recursive Implementation
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
  if (left > right) return -1

  let mid = Math.floor((left + right) / 2)

  if (arr[mid] === target) return mid
  if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, right)
  return binarySearchRecursive(arr, target, left, mid - 1)
}

console.log(binarySearchRecursive([10, 20, 30, 40, 50], 40)) // 3
