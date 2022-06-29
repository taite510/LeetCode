// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

const preorder = function(root) {
  let arr = [];
  const traverse = function(node) {
      arr.push(node.val);
      for (let i = 0; i < node.children.length; i++) {
          traverse(node.children[i]);
      }
  }
  if (root) {
      traverse(root);
  }
  return arr;
};

