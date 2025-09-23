/* Brute Force (Worst)
Repeatedly remove "()", "{}", "[]" from the string until it stops changing.
If the final string is empty → valid.
Time: O(n²) (because each replace scans whole string).
Space: O(1) */
function isValidBrute(s) {
  let prev
  do {
    prev = s
    s = s.replace("()", "").replace("{}", "").replace("[]", "")
  } while (s.length !== prev.length)
  return s.length === 0
}

/* Stack (Best)
Use a stack to track open brackets.
Push opening brackets.
On closing bracket: check if it matches the top of the stack.
At the end: stack should be empty.
Time: O(n) (one scan).
Space: O(n) for stack. */
function isValid(s) {
  const stack = []
  const map = { ')': '(', '}': '{', ']': '[' }

  for (let ch of s) {
    if (ch === '(' || ch === '{' || ch === '[') {
      stack.push(ch)
    } else {
      if (stack.length === 0 || stack.pop() !== map[ch]) {
        return false
      }
    }
  }

  return stack.length === 0
}
