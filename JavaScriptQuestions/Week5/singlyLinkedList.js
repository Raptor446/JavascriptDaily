class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  append(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      return
    }
    let curr = this.head
    while (curr.next) {
      curr = curr.next
    }
    curr.next = newNode
  }

  print() {
    let curr = this.head
    let values = []
    while (curr) {
      values.push(curr.value)
      curr = curr.next
    }
    console.log(values.join(" -> "))
  }
}

// Test
const list = new LinkedList()
list.append(10)
list.append(20)
list.append(30)
list.print() // 10 -> 20 -> 30
