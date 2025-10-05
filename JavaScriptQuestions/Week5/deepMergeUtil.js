function deepMerge(target, source) {
  const result = { ...target }
  for (const key in source) {
    if (
      typeof source[key] === "object" &&
      source[key] !== null &&
      !Array.isArray(source[key])
    ) {
      result[key] = deepMerge(result[key] || {}, source[key])
    } else {
      result[key] = source[key]
    }
  }
  return result
}

const user1 = { info: { name: "Alice", age: 25 } }
const user2 = { info: { city: "Tokyo" } }

console.log(deepMerge(user1, user2))
// { info: { name: "Alice", age: 25, city: "Tokyo" } }
