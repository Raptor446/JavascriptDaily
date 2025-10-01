/*
Brute Force
Time: O(n)
Space: O(n) (recursion call stack). */
function factorial(n) {
    if (n <= 0) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}

console.log(factorial(5)) // 120
console.log(factorial(0)) // 1
console.log(factorial(-3)) // 1
console.log(factorial(1)) // 1
console.log(factorial(6)) // 720

/*
Optimised
Time: O(n)
Space: O(1)
Safer for big n (no recursion depth limit).
*/
function factorialIter(n) {
  let result = 1
  for (let i = 2; i <= n; i++) {
    result *= i
  }
  return result
}

console.log(factorialIter(5)) // 120