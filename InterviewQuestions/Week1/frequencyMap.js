// Concise Approach
function frequencyMap(arr) {
  const freq = new Map()
  for (const item of arr) {
    freq.set(item, (freq.get(item) || 0) + 1)
  }
  return freq
}

const data = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
const result = frequencyMap(data)

for (const [item, count] of result) {
  console.log(item, count)
}


// Easy to understand
function createFrequencyMap(arr) {
  const frequencyMap = new Map()
  for (const item of arr) {
    if (frequencyMap.has(item)) {
      const currentCount = frequencyMap.get(item)
      frequencyMap.set(item, currentCount + 1)
    } else {
      frequencyMap.set(item, 1)
    }
  }

  return frequencyMap
}

const words = ['apple', 'orange', 'apple', 'banana', 'orange', 'apple']
const wordCounts = createFrequencyMap(words)

console.log(wordCounts) 

console.log(wordCounts.get('apple'))