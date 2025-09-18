// REVISE THIS AGAIN

// Given two strings s and t, find the minimum window in s which contains all the characters of t
function minWindow(s, t) {
  if (t.length > s.length) return ""
  let need = {}, have = {}
  for (const c of t) need[c] = (need[c] || 0) + 1
  let missing = t.length, left = 0, start = 0, minLen = Infinity
  for (let right = 0; right < s.length; right++) {
    let c = s[right]
    have[c] = (have[c] || 0) + 1
    if (need[c] && have[c] <= need[c]) missing--
    while (missing === 0) {
      if (right - left + 1 < minLen) {
        start = left
        minLen = right - left + 1
      }
      let lc = s[left++]
      if (need[lc] && --have[lc] < need[lc]) missing++
    }
  }
  return minLen === Infinity ? "" : s.substring(start, start + minLen)
}

console.log(minWindow("ADOBECODEBANC", "ABC")) // "BANC"
