// Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const treeToArr = function(root) {
  let arr = [];
  function climb(root) {
    if (root !== null) {
      arr.push(root.val)
      climb(root.left)
      climb(root.right)
    }

  }
  climb(root)
  return arr;
}
const increasingBST = function(root) {
  let arr = treeToArr(root);
  arr = arr.sort((a,b) => a - b)
  let head = new TreeNode(arr[0])
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.right = new TreeNode(arr[i]);
    current = current.right
  }
  return head
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
console.log(increasingBST(startTree))