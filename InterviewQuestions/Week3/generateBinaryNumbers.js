/*
Start with "1" in queue.
For each step:
Pop element x.
Append x + "0" and x + "1".
Continue until N numbers are generated.
*/
function generateBinaryNumbers(n) {
  let q = ["1"]
  let result = []

  while (n--) {
    let front = q.shift()
    result.push(front)

    q.push(front + "0")
    q.push(front + "1")
  }

  return result
}

console.log(generateBinaryNumbers(5))
// ["1", "10", "11", "100", "101"]
