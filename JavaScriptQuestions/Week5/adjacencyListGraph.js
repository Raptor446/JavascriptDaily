class Graph {
  constructor() {
    this.adjList = new Map()
  }

  addVertex(vertex) {
    if (!this.adjList.has(vertex)) this.adjList.set(vertex, [])
  }

  addEdge(v1, v2) {
    this.adjList.get(v1).push(v2)
    this.adjList.get(v2).push(v1) // undirected graph.For directed graphs, just remove this line
  }

  printGraph() {
    for (let [vertex, neighbors] of this.adjList) {
      console.log(`${vertex} -> ${neighbors.join(", ")}`)
    }
  }
}

// Example usage
const g = new Graph()
for (const v of ["A", "B", "C", "D"]) {
  g.addVertex(v)
}
g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "D")

g.printGraph()
