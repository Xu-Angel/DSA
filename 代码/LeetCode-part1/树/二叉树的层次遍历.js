/* 
https://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/zan-shi-mei-you-xiang-hao-biao-ti-by-chitanda-eru/
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root, floor = 0, arr = []) {
  if (!root) return arr;

  levelOrder(root.left, floor + 1, arr);

  if (arr[floor]) arr[floor].push(root.val);
  else arr[floor] = [root.val];

  levelOrder(root.right, floor + 1, arr);
  return arr;
};
