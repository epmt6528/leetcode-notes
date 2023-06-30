/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// Depth-First Search (DFS) TC O(n) SC O(n)
var invertTree = function (root) {
  if (root === null) return null;

  invertTree(root.left);
  invertTree(root.right);

  const temp = root.left;

  root.left = root.right;
  root.right = left;
  return root;
};

// Or
var invertTree = function (root) {
  if (root === null) return null;

  const temp = root.left;

  root.left = invertTree(root.right);
  root.right = invertTree(temp);
  return root;
};
