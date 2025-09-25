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