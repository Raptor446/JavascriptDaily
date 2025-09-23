// with Object
const arr = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']

const freq = arr.reduce((counter, item) => {
  counter[item] = (counter[item] || 0) + 1
  return counter
}, {})

console.log(freq) 
// Output: { apple: 3, banana: 2, orange: 1 }

// with Map
const arr2 = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']

const freqMap = arr2.reduce((map, item) => {
  map.set(item, (map.get(item) || 0) + 1)
  return map
}, new Map())

console.log(freqMap) 
// Output: Map(3) { 'apple' => 3, 'banana' => 2, 'orange' => 1 }
