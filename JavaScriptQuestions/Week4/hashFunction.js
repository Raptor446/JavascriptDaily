function simpleHash(key, tableSize) {
  let hash = 0
  for (let char of key) {
    hash += char.charCodeAt(0)
  }
  return hash % tableSize // ensures index is within table size
}

console.log(simpleHash("Alice", 10)) // e.g., 7
console.log(simpleHash("Bob", 10))   // e.g., 9
