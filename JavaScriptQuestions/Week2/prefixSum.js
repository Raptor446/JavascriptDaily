function prefixSums(arr) {
  let prefix = new Array(arr.length)
  prefix[0] = arr[0]

  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i]
  }

  return prefix
}

function subarraySum(prefix, l, r) {
  if (l === 0) return prefix[r]
  return prefix[r] - prefix[l - 1]
}

const arr = [2, 4, 5, 7]
const prefix = prefixSums(arr)

console.log(subarraySum(prefix, 1, 3)) // 16
console.log(subarraySum(prefix, 0, 2)) // 11
