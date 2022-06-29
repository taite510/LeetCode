// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

const levelOrder = function(root) {
  let arr = [];
  const traverse = function(node, level) {
      if (node) {
          if (arr[level]) {
              arr[level].push(node.val);
          } else {
              arr.push([node.val]);
          }
          traverse(node.left, level + 1);
          traverse(node.right, level + 1);
      }
  }
  traverse(root, 0);
  return arr;
};

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const startTree = new TreeNode(1)
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
branch7.left = branch8
branch8.left = branch9

console.log(levelOrder(startTree))