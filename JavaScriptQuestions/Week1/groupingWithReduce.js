// Group by even/odd
const arr = [1, 2, 3, 4, 5, 6]
const grouped = arr.reduce((acc, num) => {
  const group = num % 2 === 0 ? 'even' : 'odd'
  // If the group doesn't exist yet, initialize as an array
  if (!acc[group]) acc[group] = []
  acc[group].push(num)
  return acc
}, {})

console.log(grouped)
console.log(typeof(grouped))
// Output: { odd: [1, 3, 5], even: [2, 4, 6] }

// Group by string length
const words = ['hi', 'hello', 'yes', 'no', 'hey']
const byLength = words.reduce((acc, word) => {
  const len = word.length
  if (!acc[len]) acc[len] = []
  acc[len].push(word)
  return acc
}, {})

console.log(byLength)
// Output: { '2': [ 'hi', 'no' ], '3': [ 'yes', 'hey' ], '5': [ 'hello' ] }
