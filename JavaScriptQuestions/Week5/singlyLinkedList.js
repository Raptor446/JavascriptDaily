class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // Add to end
  push(value) {
    const newNode = new Node(value)
    if (!this.head) {              // empty list
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode    // link old tail → new node
      this.tail = newNode         // update tail
    }
    this.length++
    return this
  }

  // Remove from end
  pop() {
    if (!this.head) return null
    let current = this.head
    let newTail = current

    while (current.next) {
      newTail = current
      current = current.next
    }

    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current.value  // return popped node’s value
  }

  // Add to start
  unshift(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  // Remove from start
  shift() {
    if (!this.head) return null
    const oldHead = this.head
    this.head = oldHead.next
    this.length--
    if (this.length === 0) this.tail = null
    return oldHead.value
  }

  // Get node by index
  get(index) {
    if (index < 0 || index >= this.length) return null
    let current = this.head
    let counter = 0
    while (counter < index) {
      current = current.next
      counter++
    }
    return current
  }

  // Update value at index
  set(index, value) {
    const node = this.get(index)
    if (node) {
      node.value = value
      return true
    }
    return false
  }

  // Insert node at index
  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === 0) return !!this.unshift(value)
    if (index === this.length) return !!this.push(value)

    const newNode = new Node(value)
    const prev = this.get(index - 1)
    newNode.next = prev.next
    prev.next = newNode
    this.length++
    return true
  }

  // Remove node at index
  remove(index) {
    if (index < 0 || index >= this.length) return null
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    const prev = this.get(index - 1)
    const removed = prev.next
    prev.next = removed.next
    this.length--
    return removed.value
  }

  // Reverse list
  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node
    let prev = null
    let next = null
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }

  // Print all values
  print() {
    const arr = []
    let current = this.head
    while (current) {
      arr.push(current.value)
      current = current.next
    }
    console.log(arr.join(" → "))
  }
}

const list = new SinglyLinkedList()
list.push(10)
list.push(20)
list.push(30)
list.unshift(5)
list.print()   // 5 → 10 → 20 → 30

list.pop()
list.print()   // 5 → 10 → 20

list.insert(2, 15)
list.print()   // 5 → 10 → 15 → 20

list.reverse()
list.print()   // 20 → 15 → 10 → 5

/*
| Operation                   | Time        | Space |
| --------------------------- | ----------- | ----- |
| push / unshift              | O(1)        | O(1)  |
| pop / shift                 | O(n) / O(1) | O(1)  |
| get / set / insert / remove | O(n)        | O(1)  |
| reverse                     | O(n)        | O(1)  |
*/