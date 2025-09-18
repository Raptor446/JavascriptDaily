// Given a string, find the length of the longest substring without repeating characters
function lengthOfLongestSubstring(s) {
    const set = new Set()
    let left = 0
    let right = 0
    let maxLength = 0
    while (right < s.length) {
        if (!set.has(s[right])) {
            set.add(s[right])
            right++
            maxLength = Math.max(maxLength, right - left)
        } else {
            set.delete(s[left])
            left++
        }
    }
    return maxLength
}

console.log(lengthOfLongestSubstring("abcabcbb")) // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"))    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"))   // Output: 3