// Filter out even numbers
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);

console.log(evens);      // [2, 4, 6]
console.log(numbers);    // [1, 2, 3, 4, 5, 6] (original unchanged)


// reduce() to find sum

const sum = evens.reduce((acc, n) => acc + n, 0)
console.log(sum)

// map for a doubled value array
const doubledArray = evens.map(a => a * 2)
console.log(doubledArray)