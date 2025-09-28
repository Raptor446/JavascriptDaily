import { root } from './binaryTree.js'

// Recursive
function inorder(node, result = []) {
  if (!node) return result
  inorder(node.left, result)
  result.push(node.val)
  inorder(node.right, result)
  return result
}
console.log("Inorder:", inorder(root)) // [D, B, E, A, C, F]

// Iterative (using stack)
function inorderIterative(root) {
  const result = []
  const stack = []
  let current = root

  while (current || stack.length > 0) {
    while (current) {
      stack.push(current)
      current = current.left
    }
    current = stack.pop()
    result.push(current.val)
    current = current.right
  }
  return result
}
console.log("Inorder Iterative:", inorderIterative(root))
