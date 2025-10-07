/*
You can climb 1 or 2 steps at a time.How many distinct ways to climb n steps?
*/
function climbStairs(n) {
  const dp = [1, 1]
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}

console.log(climbStairs(5)) // 8
