/**
 * Iterative Depth-First Search (DFS) implementation
 * Time Complexity: O(V + E) - V is vertices, E is edges
 * Space Complexity: O(V) - For the stack and visited set
 */
// Example graph (undirected)
const graph = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: []
}

function dfsIterative(start) {
  const stack = [start]       // use stack instead of recursion
  const visited = new Set()   // track visited nodes
  const result = []

  while (stack.length > 0) {
    const node = stack.pop()  // take from top (LIFO)

    if (!visited.has(node)) {
      visited.add(node)
      result.push(node)

      // push neighbors in reverse order to maintain order like recursive DFS
      for (let neighbor of [...graph[node]].reverse()) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor)
        }
      }
    }
  }

  return result
}

console.log(dfsIterative("A")) 
// Possible output: ["A","B","D","E","F","C"]

/*
Dry Run:
Start with stack = [A].
Pop A → visit A. Push C, B.
→ stack = [C, B].
Pop B → visit B. Push E, D.
→ stack = [C, E, D].
Pop D → visit D. (no neighbors).
Pop E → visit E. Push F.
→ stack = [C, F].
Pop F → visit F. (no neighbors).
Pop C → visit C. Push F (already visited).
*/