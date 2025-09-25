function mergeSorted(arr1, arr2) {
  let i = 0, j = 0, res = []
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) res.push(arr1[i++])
    else res.push(arr2[j++])
  }
  return [...res, ...arr1.slice(i), ...arr2.slice(j)]
}
console.log(mergeSorted([1,3,5], [2,4,6])) // [1,2,3,4,5,6]
