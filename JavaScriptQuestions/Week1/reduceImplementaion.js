// More concise way
Array.prototype.myReduce = function(callbackFn, initialValue) {
  const arr = this // 'this' refers to the array on which myReduce is called
  let accumulator = initialValue
  let startIndex = 0

  // Handle the case where no initialValue is provided
  // The first element of the array becomes the initial accumulator
  if (initialValue === undefined) {
    accumulator = arr[0]
    startIndex = 1
  }

  // Iterate over the array, starting from the correct index
  for (let i = startIndex; i < arr.length; i++) {
    const currentValue = arr[i]
    // The accumulator is updated with the return value of the callback
    accumulator = callbackFn(accumulator, currentValue, i, arr)
  }

  // Return the final accumulated value
  return accumulator
}

/*
Array.prototype.myReduce = ...: We add myReduce as a method to the Array.prototype object. This makes the method available to all arrays.

const arr = this: Inside the method, the this keyword refers to the array instance the method was called on. For example, if you call [1, 2].myReduce(...), this will be [1, 2].

Handle initialValue: This is a crucial part of the logic. If no initialValue is provided, the first element of the array (arr[0]) is used as the accumulator, and the loop starts from the second element (arr[1]). If an initialValue is provided, the accumulator starts with that value, and the loop begins from the first element (arr[0]).

Looping: A for loop iterates through the array, ensuring it starts from the correct startIndex.

callbackFn(...): In each iteration, the callbackFn is called with the current accumulator, the currentValue, the index, and the array itself. We update the accumulator with the value returned by the callback.

return accumulator: After the loop finishes, the final accumulated value is returned
*/

// Less concise way but handles errors
Array.prototype.myReduce2 = function(callback, initialValue) {
    if (typeof callback !== "function") {
        throw new TypeError (callback + "is not a function")
    }
    const arr = this
    let accumulator
    let startIndex
    // Case 1: When initialvalue provided
    if (arguments.length >= 2) {
        accumulator = initialValue
        startIndex = 0
    } else {
        // Case 2: No initialvalue -> use first element
        if (arr.length === 0) {
            throw new TypeError("Reduce of empty array with no initial value")
        }
        accumulator = arr[0]
        startIndex = 1
    }

    // loop through array 
    for (let i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i], i, arr)
    }
    return accumulator
}

// sum of numbers
const nums = [1,2,3,4]
const sum = nums.myReduce((acc, curr) => acc + curr, 0)
console.log(sum)

// find maximum
const max = nums.myReduce((acc, curr) => acc > curr ? acc : curr)
console.log(max)

// flatten array
const nested = [[1, 2], [3, 4], [5]]
const flat = nested.myReduce((acc, curr) => acc.concat(curr), [])
console.log(flat)

// Concatenating strings
const words = ['hello', ' ', 'world']
const sentence = words.myReduce((acc, curr) => acc + curr, '')
console.log(sentence)
