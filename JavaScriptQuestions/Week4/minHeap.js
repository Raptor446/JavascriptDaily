/*
Insert: O(log n)
Extract Min: O(log n)
Peek: O(1)
Build Heap (n inserts): O(n log n)
*/

class MinHeap {
  constructor() {
    this.heap = []
  }

  // 🔹 Get parent/children indices
  getParentIndex(i) { return Math.floor((i - 1) / 2) }
  getLeftChildIndex(i) { return 2 * i + 1 }
  getRightChildIndex(i) { return 2 * i + 2 }

  // 🔹 Swap utility
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  // 🔹 Insert new value
  insert(value) {
    this.heap.push(value)
    this.heapifyUp()
  }

  // Bubble up newly inserted element
  heapifyUp() {
    let index = this.heap.length - 1
    while (index > 0) {
      let parentIndex = this.getParentIndex(index)
      if (this.heap[index] < this.heap[parentIndex]) {
        this.swap(index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }
  }

  // 🔹 Extract min (root)
  extractMin() {
    if (this.heap.length === 0) return null
    if (this.heap.length === 1) return this.heap.pop()

    const root = this.heap[0]
    this.heap[0] = this.heap.pop() // Move last element to root
    this.heapifyDown()
    return root
  }

  // Push down root until heap condition satisfied
  heapifyDown() {
    let index = 0
    const length = this.heap.length

    while (true) {
      let left = this.getLeftChildIndex(index)
      let right = this.getRightChildIndex(index)
      let smallest = index

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left
      }
      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right
      }

      if (smallest !== index) {
        this.swap(index, smallest)
        index = smallest
      } else {
        break
      }
    }
  }

  // 🔹 Peek minimum
  peek() {
    return this.heap.length > 0 ? this.heap[0] : null
  }

  // 🔹 Get size
  size() {
    return this.heap.length
  }
}

const heap = new MinHeap()
heap.insert(5)
heap.insert(3)
heap.insert(8)
heap.insert(1)

console.log("Heap array:", heap.heap)   // [1, 3, 8, 5]
console.log("Min:", heap.peek())        // 1
console.log("Extract:", heap.extractMin()) // 1
console.log("Heap after extract:", heap.heap) // [3, 5, 8]
