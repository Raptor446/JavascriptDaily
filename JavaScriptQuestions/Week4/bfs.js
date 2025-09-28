/**
 * Iterative Breadth-First Search (BFS) implementation
 * Time Complexity: O(V + E) - V is vertices, E is edges
 * Space Complexity: O(V) - For the queue and visited set
 */
function breadthFirstSearch(graph, startNode) {
  // 1. Initialize a queue and a set to track visited nodes.
  // The Array.prototype.shift() method is used as the 'dequeue' operation.
  const queue = [startNode]
  const visited = new Set([startNode])
  const result = [] // Array to store the nodes in BFS order

  // 2. Loop while the queue is not empty.
  while (queue.length > 0) {
    // Dequeue: Get the current node from the front of the queue (FIFO)
    const currentNode = queue.shift() 
    result.push(currentNode)

    // 3. Process the neighbors.
    if (graph[currentNode]) {
      for (const neighbor of graph[currentNode]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor)
          queue.push(neighbor) // Enqueue: Add unvisited neighbor to the back
        }
      }
    }
  }

  return result
}

// Example Graph (Adjacency List)
const graph = {
  'A': ['B', 'C'],
  'B': ['D', 'E'],
  'C': ['F'],
  'D': ['G'],
  'E': ['F'],
  'F': ['G'],
  'G': []
}

console.log(breadthFirstSearch(graph, 'A')) 
// Expected BFS Output (Level by Level): [A, B, C, D, E, F, G]

// Example graph2 (adjacency list)
const graph2 = {
  A: ["B", "C"],
  B: ["D", "E"],
  C: ["F"],
  D: [],
  E: ["F"],
  F: []
}

function bfs(start) {
  const queue = [start]     // normal array, but we'll use head pointer
  let head = 0              // pointer to front of queue
  const visited = new Set()
  const result = []

  while (head < queue.length) {
    const node = queue[head] // access front element
    head++                   // move pointer forward

    if (!visited.has(node)) {
      visited.add(node)
      result.push(node)

      for (let neighbor of graph2[node]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor)
        }
      }
    }
  }

  return result
}

console.log(bfs("A")) // Expected output: ["A", "B", "C", "D", "E", "F"]

/*
Step-by-Step Dry Run:
queue = [A], head = 0 → visit A, push B, C.
queue = [A, B, C], head = 1 → visit B, push D, E.
queue = [A, B, C, D, E], head = 2 → visit C, push F.
queue = [A, B, C, D, E, F], head = 3 → visit D.
head = 4 → visit E, neighbor F already added.
head = 5 → visit F. Done
*/