class TreeNode {
  constructor(value) {
    this.value = value
    this.children = [] // array of child nodes
  }

  addChild(node) {
    this.children.push(node)
  }
}

// Example usage:
const root = new TreeNode(10)
const node20 = new TreeNode(20)
const node30 = new TreeNode(30)

root.addChild(node20)
root.addChild(node30)

node20.addChild(new TreeNode(40))
node20.addChild(new TreeNode(50))
node30.addChild(new TreeNode(60))

console.log(root)
