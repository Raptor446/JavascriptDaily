function isPalindromeArray(arr) {
  let left = 0, right = arr.length - 1
  while (left < right) {
    if (arr[left] !== arr[right]) return false
    left++
    right--
  }
  return true
}
console.log(isPalindromeArray([1,2,3,2,1])) // true
