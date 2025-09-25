function calculator (a, b, operator) {
    switch (operator) {
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            if (b === 0) return "Error: Division by zero"
            return a / b
        default:
            return 'Error: Unknown operator'
    }
}


console.log(calculator(4, 5, "+"))
console.log(calculator(6, 2, "-"))
console.log(calculator(3, 7, "*"))
console.log(calculator(10, 2, "/"))
console.log(calculator(1, 0, "/"))
console.log(calculator(5, 3, "%"))