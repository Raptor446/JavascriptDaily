function sumOfDigits(n) {
  if (n === 0) return 0
  return (n % 10) + sumOfDigits(Math.floor(n / 10))
}
console.log(sumOfDigits(1234)) // 10

function sumDigitsIter(n) {
  let sum = 0
  while (n > 0) {
    sum += n % 10
    n = Math.floor(n / 10)
  }
  return sum
}

console.log(sumDigitsIter(1234)) // 10
