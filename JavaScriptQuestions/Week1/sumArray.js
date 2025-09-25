// Brute Force -> T.C = O(n), S.C = O(1)
function sumArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}

console.log('sumArray', sumArray([1,10,-5]))

// More Readable -> T.C = O(n), S.C = O(1)
function arraySum(arr) {
    // 0 in the end is the initial value of acc
    return arr.reduce((acc, curVal) => acc + curVal, 0)
}

console.log('arraySum', arraySum([1,10,-5]))