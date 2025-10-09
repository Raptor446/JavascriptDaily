// Best Time to Buy and Sell Stock - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Brute Force way -> T.C = O(n^2), S.C = O(1)
const maxProfitBruteForce = (prices) => {
    let maxProfit = 0
    const n = prices.length
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const profit = prices[j] - prices[i]
            if (profit > maxProfit) {
                maxProfit = profit
            }
        }
    }
    return maxProfit
}

console.log(maxProfitBruteForce([7,1,5,3,6,4]))

// Optimised way -> T.C = O(n), S.C = O(1)
const maxProfit = function(prices) {
  let minPrice = Infinity
  let maxProfit = 0
  for (let price of prices) {
    if (price < minPrice) {
      minPrice = price
    } else {
      maxProfit = Math.max(maxProfit, price - minPrice)
    }
  }
  return maxProfit
}

console.log(maxProfit([7,6,4,3,1]))
