// Creating a new array
function moveZeros(arr) {
    const nonzeros = arr.filter(num => num !== 0)
    const zeros = arr.length - nonzeros.length
    return [...nonzeros, ...Array(zeros).fill(0)]
}

console.log(moveZeros([0,1,0,3,12])) // [1,3,12,0,0]
console.log(moveZeros([0, 0, 1])) // [1, 0, 0]
console.log(moveZeros([1, 0, 0])) // [1, 0, 0]
console.log(moveZeros([0, 0, 0])) // [0, 0, 0]

// Without creating a new array
function moveZerosInPlace(arr) {
  let pos = 0 // position to place the next non-zero element
  for (let n of arr) {
    if (n !== 0){
        arr[pos++] = n // place non-zero element at the current position and increment position
    }
  }
  while (pos < arr.length) {
    arr[pos++] = 0 // fill the rest of the array with zeros
  }
  return arr
}

console.log(moveZerosInPlace([0, 1, 0, 3, 12])) // [1, 3, 12, 0, 0]
console.log(moveZerosInPlace([0, 0, 1])) // [1, 0, 0]
console.log(moveZerosInPlace([1, 0, 0])) // [1, 0, 0]
console.log(moveZerosInPlace([0, 0, 0])) // [0, 0, 0]