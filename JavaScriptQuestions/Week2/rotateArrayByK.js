function rotateArray(arr, k) {
  k = k % arr.length
  arr = arr.slice(-k).concat(arr.slice(0, -k))
  return arr
}
console.log(rotateArray([1,2,3,4,5,6,7], 3)) // [5,6,7,1,2,3,4]

function rotateArray1(arr, k) {
  k = k % arr.length
  return [...arr.slice(-k), ...arr.slice(0, -k)]
}
console.log(rotateArray1([1,2,3,4,5,6,7], 3)) // [5,6,7,1,2,3,4]
