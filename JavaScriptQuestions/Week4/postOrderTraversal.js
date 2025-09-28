import { root } from './binaryTree.js'

// Recursive 
function postorder(node, result = []) {
  if (!node) return result
  postorder(node.left, result)
  postorder(node.right, result)
  result.push(node.val)
  return result
}
console.log("Postorder:", postorder(root)) // [D, E, B, F, C, A]

// Iterative (two stacks method)
function postorderIterative(root) {
  if (!root) return []
  const stack1 = [root], stack2 = [], result = []

  while (stack1.length > 0) {
    const node = stack1.pop()
    stack2.push(node)
    if (node.left) stack1.push(node.left)
    if (node.right) stack1.push(node.right)
  }

  while (stack2.length > 0) {
    result.push(stack2.pop().val)
  }
  return result
}
console.log("Postorder Iterative:", postorderIterative(root))
