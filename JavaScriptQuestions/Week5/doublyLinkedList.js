class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // Add node at end
  push(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  // Remove node from end
  pop() {
    if (!this.head) return null
    const removed = this.tail
    if (this.length === 1) {
      this.head = this.tail = null
    } else {
      this.tail = removed.prev
      this.tail.next = null
      removed.prev = null
    }
    this.length--
    return removed.value
  }

  // Add node at beginning
  unshift(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.length++
    return this
  }

  // Remove node from beginning
  shift() {
    if (!this.head) return null
    const removed = this.head
    if (this.length === 1) {
      this.head = this.tail = null
    } else {
      this.head = removed.next
      this.head.prev = null
      removed.next = null
    }
    this.length--
    return removed.value
  }

  // Get node by index (O(n/2) — can start from head or tail)
  get(index) {
    if (index < 0 || index >= this.length) return null
    let current
    if (index < this.length / 2) {
      current = this.head
      for (let i = 0; i < index; i++) current = current.next
    } else {
      current = this.tail
      for (let i = this.length - 1; i > index; i--) current = current.prev
    }
    return current
  }

  // Insert at index
  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === 0) return !!this.unshift(value)
    if (index === this.length) return !!this.push(value)

    const newNode = new Node(value)
    const before = this.get(index - 1)
    const after = before.next

    before.next = newNode
    newNode.prev = before
    newNode.next = after
    after.prev = newNode

    this.length++
    return true
  }

  // Remove at index
  remove(index) {
    if (index < 0 || index >= this.length) return null
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    const node = this.get(index)
    const before = node.prev
    const after = node.next

    before.next = after
    after.prev = before

    node.next = node.prev = null
    this.length--
    return node.value
  }

  // Print forward
  printForward() {
    let arr = []
    let current = this.head
    while (current) {
      arr.push(current.value)
      current = current.next
    }
    console.log("Forward:", arr.join(" ↔ "))
  }

  // Print backward
  printBackward() {
    let arr = []
    let current = this.tail
    while (current) {
      arr.push(current.value)
      current = current.prev
    }
    console.log("Backward:", arr.join(" ↔ "))
  }
}

const dll = new DoublyLinkedList()
dll.push(10)
dll.push(20)
dll.push(30)
dll.unshift(5)
dll.insert(2, 15)

dll.printForward()  // Forward: 5 ↔ 10 ↔ 15 ↔ 20 ↔ 30
dll.printBackward() // Backward: 30 ↔ 20 ↔ 15 ↔ 10 ↔ 5

dll.remove(3)       // removes 20
dll.printForward()  // 5 ↔ 10 ↔ 15 ↔ 30
