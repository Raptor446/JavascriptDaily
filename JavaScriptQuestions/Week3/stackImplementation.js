// Using Array (built-in) - Easiest method since push/pop already give stack-like behavior.
class Stack {
  constructor() {
    this.items = []
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    if (this.isEmpty()) return null
    return this.items.pop()
  }

  peek() {
    return this.isEmpty() ? null : this.items[this.items.length - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }
}

// Example
const stack = new Stack()
stack.push(10)
stack.push(20)
console.log(stack.peek())  // 20
console.log(stack.pop())   // 20
console.log(stack.pop())   // 10
console.log(stack.isEmpty()) // true

// Using Linked List (for deeper understanding) - This avoids array resizing issues.
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class StackLL {
  constructor() {
    this.top = null
    this.length = 0
  }

  push(value) {
    const node = new Node(value)
    node.next = this.top
    this.top = node
    this.length++
  }

  pop() {
    if (!this.top) return null
    const value = this.top.value
    this.top = this.top.next
    this.length--
    return value
  }

  peek() {
    return this.top ? this.top.value : null
  }

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }
}

// Example
const stack2 = new StackLL()
stack2.push(5)
stack2.push(15)
console.log(stack2.pop())   // 15
console.log(stack2.peek())  // 5
