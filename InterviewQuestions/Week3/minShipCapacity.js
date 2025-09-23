/*
Problem: You have weights = [1,2,3,4,5,6,7,8,9,10], ship in D=5 days.
Find minimum capacity needed.
Answer space: capacity ∈ [max(weights), sum(weights)] = [10, 55].
Feasibility: can(capacity) → simulate shipping to see if possible within D.
Binary search to find smallest feasible capacity.
*/
function canShip(weights, D, cap) {
  let days = 1, load = 0
  for (let w of weights) {
    if (load + w > cap) {
      days++
      load = 0
    }
    load += w
  }
  return days <= D
}

function minShipCapacity(weights, D) {
  let left = Math.max(...weights)     // at least max weight
  let right = weights.reduce((a, b) => a + b, 0) // at most sum

  while (left < right) {
    let mid = Math.floor((left + right) / 2)
    if (canShip(weights, D, mid)) {
      right = mid // try smaller
    } else {
      left = mid + 1 // need bigger
    }
  }
  return left
}

console.log(minShipCapacity([1,2,3,4,5,6,7,8,9,10], 5)) // 15
