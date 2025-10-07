function memoize(func) {
  const cache = {} // Cache to store results

  return function (...args) {
    const key = JSON.stringify(args) // Generate a unique key from arguments

    if (cache[key]) {
      // If result exists in cache, return it
      return cache[key]
    } else {
      // Otherwise, execute function, store result, and return it
      const result = func.apply(this, args)
      cache[key] = result
      return result
    }
  }
}

// using map
function memoize2(fn) {
  const cache = new Map()

  return function (...args) {
    const key = JSON.stringify(args)
    if (cache.has(key)) {
      console.log(`Fetching from cache for ${key}`)
      return cache.get(key)
    }

    const result = fn(...args)
    cache.set(key, result)
    console.log(`Storing in cache for ${key}`)
    return result
  }
}

function slowSquare(n) {
  console.log("Computing square of", n)
  return n * n
}

const fastSquare = memoize2(slowSquare)

console.log(fastSquare(5)) // Computes and stores
console.log(fastSquare(5)) // Retrieves from cache instantly
