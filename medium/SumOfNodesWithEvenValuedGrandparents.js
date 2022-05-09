// Given the root of a binary tree, return the sum of values of nodes with an even-valued grandparent. If there are no nodes with an even-valued grandparent, return 0.

// A grandparent of a node is the parent of its parent if it exists.

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const sumEvenGrandparent = function(root) {
  let sum = 0;
  function sumGrandChildren(node, depth) {
    if (node.left) {
      if (depth === 1) {
        sum += node.left.val
      } else {
        sumGrandChildren(node.left, 1)
      }
    }
    if (node.right) {
      if (depth === 1) {
        sum += node.right.val
      } else {
        sumGrandChildren(node.right, 1)
      }
    }
  }
  function dive(node) {
    if (node.val % 2 === 0) {
      sumGrandChildren(node, 0)
    }
    if (node.left) {
      dive(node.left)
    }
    if (node.right) {
      dive(node.right)
    }
  }
  dive(root)
  return sum
};

const startTree = new TreeNode(2)
const branch2 = new TreeNode(2)
const branch3 = new TreeNode(3)
const branch4 = new TreeNode(4)
const branch5 = new TreeNode(5)
const branch6 = new TreeNode(6)
const branch7 = new TreeNode(7)
const branch8 = new TreeNode(8)
const branch9 = new TreeNode(9)
startTree.left = branch2
startTree.right = branch3
branch2.left = branch4
branch2.right = branch5
branch3.right = branch6
branch4.left = branch7
branch6.right = branch8
branch8.right = branch9

sumEvenGrandparent(startTree)