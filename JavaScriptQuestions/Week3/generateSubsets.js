// Recursive (backtracking)
function subsets(nums) {
  let result = []

  function backtrack(start, path) {
    result.push([...path]) // add current subset

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i])          // choose
      backtrack(i + 1, path)      // explore
      path.pop()                  // un-choose
    }
  }

  backtrack(0, [])
  return result
}
console.log(subsets([1,2,3]))
// [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]

// Iterative - Each new element doubles the subsets we already have.
function subsetsIter(nums) {
  let result = [[]] // start with empty subset
  for (let num of nums) {
    let newSubsets = result.map(subset => [...subset, num])
    result.push(...newSubsets)
  }
  return result
}

console.log(subsetsIter([1,2,3]))
// [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]
