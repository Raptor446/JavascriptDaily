import { Node } from './node.js'

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }

  // Add node at end
  append(value) {
    const newNode = new Node(value)
    if (!this.head) {         // empty list
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.size++
  }

  // Add node at beginning
  prepend(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.size++
  }

  // Remove first node with given value
  remove(value) {
    if (!this.head) return

    // if head needs to be removed
    if (this.head.value === value) {
      this.head = this.head.next
      if (!this.head) this.tail = null // list became empty
      this.size--
      return
    }

    let current = this.head
    while (current.next && current.next.value !== value) {
      current = current.next
    }

    if (current.next) {
      current.next = current.next.next
      if (!current.next) this.tail = current // removed tail
      this.size--
    }
  }

  // Print the list
  print() {
    let current = this.head
    let result = ""
    while (current) {
      result += current.value + " → "
      current = current.next
    }
    console.log(result + "null")
  }
}


// Example usage
const list = new LinkedList()

list.append(10)
list.append(20)
list.append(30)
list.print()  // 10 → 20 → 30 → null

list.prepend(5)
list.print()  // 5 → 10 → 20 → 30 → null

list.remove(20)
list.print()  // 5 → 10 → 30 → null

list.remove(5)
list.print()  // 10 → 30 → null

/*
Insert at head/tail: O(1)
Insert in middle: O(n) (need traversal)
Search: O(n)
Delete by value: O(n)
*/