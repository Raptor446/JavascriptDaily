function findMinMax(arr) {
  let min = arr[0], max = arr[0]
  for (let num of arr) {
    if (num < min) min = num
    if (num > max) max = num
  }
  return { min, max }
}
console.log(findMinMax([3, 7, 1, 9, 5])) // {min:1, max:9}
