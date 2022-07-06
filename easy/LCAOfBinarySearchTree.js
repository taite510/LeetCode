// Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const lowestCommonAncestor = function(root, p, q) {
  while (root) {
      if (root.val < p.val && root.val < q.val) {
          root = root.right;
      }
      else if (root.val > p.val && root.val > q.val) {
          root = root.left;
      } else {
          break;
      }
  }
  return root;
};

const branch0 = new TreeNode(0)
const branch2 = new TreeNode(2)
const branch3 = new TreeNode(3)
const branch4 = new TreeNode(4)
const branch5 = new TreeNode(5)
const branch6 = new TreeNode(6)
const branch7 = new TreeNode(7)
const branch8 = new TreeNode(8)
const branch9 = new TreeNode(9)

branch6.left = branch2
branch6.right = branch8
branch2.left = branch0
branch2.right = branch4
branch4.left = branch3
branch4.right = branch5
branch8.left = branch7
branch8.right = branch9

console.log(lowestCommonAncestor(branch6, branch2, branch4))