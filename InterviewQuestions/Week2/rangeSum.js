function buildPrefix(nums) {
  let prefix = [0]
  for (let num of nums) {
    prefix.push(prefix[prefix.length - 1] + num)
  }
  return prefix
}

function rangeSum(prefix, i, j) {
  return prefix[j + 1] - prefix[i]
}
