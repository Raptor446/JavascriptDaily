class Queue {
  constructor() {
    this.items = []
  }

  // Add an element to the end of the queue (enqueue)
  enqueue(element) {
    this.items.push(element)
  }

  // Remove and return the first element from the queue (dequeue)
  dequeue() {
    if (this.isEmpty()) {
      return "Underflow" // Queue is empty
    }
    return this.items.shift()
  }

  // Return the first element without removing it
  peek() {
    if (this.isEmpty()) {
      return "No elements in queue"
    }
    return this.items[0]
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0
  }
}

// Example usage:
const q = new Queue()
q.enqueue(10)
q.enqueue(20)
console.log(q.peek())    // Output: 10
console.log(q.dequeue()) // Output: 10
console.log(q.dequeue()) // Output: 20
console.log(q.isEmpty()) // Output: true


/*
In a simple array queue, once you dequeue, the front pointer moves ahead, and freed-up slots can’t be reused.
A circular queue connects the end of the array back to the start (like a circle).
So, when rear reaches the end, it can wrap around and use empty slots at the beginning.
*/
class CircularQueue {
  constructor(size) {
    this.size = size
    this.items = new Array(size)
    this.front = -1
    this.rear = -1
  }

  // Check if empty
  isEmpty() {
    return this.front === -1
  }

  // Check if full
  isFull() {
    return (this.rear + 1) % this.size === this.front
  }

  // Enqueue operation
  enqueue(element) {
    if (this.isFull()) {
      console.log("Queue is full!")
      return
    }

    if (this.isEmpty()) {
      this.front = 0
      this.rear = 0
    } else {
      this.rear = (this.rear + 1) % this.size
    }

    this.items[this.rear] = element
  }

  // Dequeue operation
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty!")
      return null
    }

    const item = this.items[this.front]

    if (this.front === this.rear) {
      // Only one element left
      this.front = -1
      this.rear = -1
    } else {
      this.front = (this.front + 1) % this.size
    }

    return item
  }

  // Peek front element
  peek() {
    return this.isEmpty() ? null : this.items[this.front]
  }

  // Print queue (logical order)
  printQueue() {
    if (this.isEmpty()) {
      console.log("Queue is empty")
      return
    }

    let result = []
    let i = this.front
    while (true) {
      result.push(this.items[i])
      if (i === this.rear) break
      i = (i + 1) % this.size
    }

    console.log(result)
  }
}

let cq = new CircularQueue(5)

cq.enqueue(10)
cq.enqueue(20)
cq.enqueue(30)
cq.enqueue(40)
cq.printQueue() // [10, 20, 30, 40]

console.log(cq.dequeue()) // 10
console.log(cq.dequeue()) // 20
cq.printQueue() // [30, 40]

cq.enqueue(50)
cq.enqueue(60)
cq.enqueue(70) // wraps around
cq.printQueue() // [30, 40, 50, 60, 70]

console.log(cq.isFull()) // true
