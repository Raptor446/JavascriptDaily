// Brute Force -> T.C = O(n), S.C = O(n)

function reverseTheString (str) {
    let reversedString = ''
    for(let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i]
    }
    return reversedString
}

// More readable -> T.C = O(n), S.C = O(n)

function reverseString (str) {
    return str.split('').reverse().join('')
}

function recursiveReverseString(s) {
  if (s.length <= 1) return s
  return recursiveReverseString(s.slice(1)) + s[0]
}

console.log('reverseTheString', reverseTheString('rohan'))
console.log('reverseString', reverseString('ayush'))
console.log('recursiveReverseString', recursiveReverseString("hello"))
