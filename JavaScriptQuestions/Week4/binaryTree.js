class TreeNode {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

// Build sample tree:
//        A
//       / \
//      B   C
//     / \   \
//    D   E   F
const root = new TreeNode("A")
root.left = new TreeNode("B")
root.right = new TreeNode("C")
root.left.left = new TreeNode("D")
root.left.right = new TreeNode("E")
root.right.right = new TreeNode("F")

export { root }
