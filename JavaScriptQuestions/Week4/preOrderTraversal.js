import { root } from './binaryTree.js'

// Recursive 
function preorder(node, result = []) {
  if (!node) return result
  result.push(node.val)
  preorder(node.left, result)
  preorder(node.right, result)
  return result
}
console.log("Preorder:", preorder(root)) // [A, B, D, E, C, F]

// Iterative (using stack)
function preorderIterative(root) {
  if (!root) return []
  const stack = [root], result = []
  
  while (stack.length > 0) {
    const node = stack.pop()
    result.push(node.val)

    if (node.right) stack.push(node.right) // push right first
    if (node.left) stack.push(node.left)   // then left (so left is processed first)
  }
  return result
}
console.log("Preorder Iterative:", preorderIterative(root))
