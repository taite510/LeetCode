// Given the root of a binary tree, return the sum of values of its deepest leaves.

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const deepestLeavesSum = function(root) {
  let deepest = 0
  let sum = 0
  function dive(node, depth) {
    if (depth === deepest) {
      sum += node.val
    } else if (depth > deepest) {
      deepest = depth
      sum = node.val
    }
    if (node.left !== null) {
      dive(node.left, depth + 1)
    }
    if (node.right !== null) {
      dive(node.right, depth + 1)
    }
  }
  dive(root, 0)
  return sum
};


const startTree = new TreeNode(1)
const branch2 = new TreeNode(2)
const branch3 = new TreeNode(3)
const branch4 = new TreeNode(4)
const branch5 = new TreeNode(5)
const branch6 = new TreeNode(6)
const branch7 = new TreeNode(7)
const branch8 = new TreeNode(8)
startTree.left = branch2
startTree.right = branch3
branch2.left = branch4
branch2.right = branch5
branch3.right = branch6
branch4.left = branch7
branch6.right = branch8

console.log(deepestLeavesSum(startTree))
