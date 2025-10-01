/*
Brute Force
Time: O(2^n) 😱 (because lots of repeated work)
Space: O(n)
*/
function fib(n) {
  if (n <= 1) return n
  return fib(n - 1) + fib(n - 2)
}

/*
Optimised Recursion(Memoization)
Save results so you don’t recompute.
Time: O(n)
Space: O(n)
*/
function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n]
  if (n <= 1) return n
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo)
  return memo[n]
}

/*
Iterative (Best for large n)
Use bottom-up dynamic programming.
Time: O(n)
Space: O(1)
*/
function fibIter(n) {
  if (n <= 1) return n
  let prev = 0, curr = 1
  for (let i = 2; i <= n; i++) {
    [prev, curr] = [curr, prev + curr]
  }
  return curr
}
