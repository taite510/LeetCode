// Given two binary search trees root1 and root2, return a list containing all the integers from both trees sorted in ascending order.

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const getAllElements = function(root1, root2) {
  let arr = [];
  function climbTree(root) {
    arr.push(root.val);
    root.left ? climbTree(root.left) : null;
    root.right ? climbTree(root.right) : null;
  }
  root1 !== null ? climbTree(root1) : null;
  root2 !== null ? climbTree(root2) : null;
  return arr.sort((a,b) => a - b)
};


const startTree1 = new TreeNode(1)
const startTree2 = new TreeNode(10)
const branch2 = new TreeNode(2)
const branch3 = new TreeNode(3)
const branch4 = new TreeNode(4)
const branch5 = new TreeNode(5)
const branch6 = new TreeNode(6)
const branch7 = new TreeNode(7)
const branch8 = new TreeNode(8)
const branch9 = new TreeNode(9)

startTree1.left = branch2
startTree1.right = branch3
branch2.left = branch4
branch2.right = branch5
branch3.right = branch6
branch4.left = branch7
startTree2.right = branch8
branch8.left = branch9

console.log(getAllElements(startTree1, startTree2))
