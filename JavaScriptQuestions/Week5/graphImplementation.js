// Graph (Adjacency List)
class Graph {
  constructor() {
    this.adjList = new Map()
  }

  addVertex(v) {
    if (!this.adjList.has(v)) this.adjList.set(v, [])
  }

  addEdge(v, w) {
    this.addVertex(v)
    this.addVertex(w)
    this.adjList.get(v).push(w)
    this.adjList.get(w).push(v) // undirected
  }

  bfs(start) {
    let visited = new Set()
    let queue = [start]
    visited.add(start)

    while (queue.length) {
      let node = queue.shift()
      console.log(node)
      for (let neighbor of this.adjList.get(node)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor)
          queue.push(neighbor)
        }
      }
    }
  }

  dfs(start, visited = new Set()) {
    if (visited.has(start)) return
    visited.add(start)
    console.log(start)
    for (let neighbor of this.adjList.get(start)) {
      this.dfs(neighbor, visited)
    }
  }
}

// Test
const g = new Graph()
g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")

console.log("BFS:")
g.bfs("A")

console.log("DFS:")
g.dfs("A")
