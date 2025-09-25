function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i // Return the index if the target is found
        }
    }
    return -1 // Return -1 if the target is not found
}

console.log(linearSearch([10, 20, 30, 40], 30)) // 2
console.log(linearSearch([10, 20, 30, 40], 50)) // -1

// using array methods
const arr = [10, 20, 30, 40]
const target = 30

const index = arr.findIndex(el => el === target)
console.log(index) // 2

const index2 = arr.indexOf(40)
console.log(index2) // 3
