// You are given an integer array nums with no duplicates. A maximum binary tree can be built recursively from nums using the following algorithm:

// Create a root node whose value is the maximum value in nums.
// Recursively build the left subtree on the subarray prefix to the left of the maximum value.
// Recursively build the right subtree on the subarray suffix to the right of the maximum value.
// Return the maximum binary tree built from nums.

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const constructMaximumBinaryTree = function(nums) {
  if (nums.length === 0) {
    return null;
  }
  const max = Math.max(...nums)
  let arr1 = [];
  let arr2 = [];
  let split = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== max) {
      if (split) {
        arr2.push(nums[i]);
      } else {
        arr1.push(nums[i]);
      }
    } else {
      split = true;
    }
  }
  return new TreeNode(max, constructMaximumBinaryTree(arr1), constructMaximumBinaryTree(arr2));
};


console.log(constructMaximumBinaryTree([3,2,1,6,0,5]))