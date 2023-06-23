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
 * @return {number}
 */

// Depth First Search (DFS)
var diameterOfBinaryTree = function (root) {
  let diameter = 0;
  depthFirstSearch(root);
  return diameter;

  function depthFirstSearch(node) {
    if (!node) return 0;
    const leftSideDepth = depthFirstSearch(node.left);
    const rightSideDepth = depthFirstSearch(node.right);
    diameter = Math.max(diameter, leftSideDepth + rightSideDepth);
    return 1 + Math.max(leftSideDepth, rightSideDepth);
  }
};
