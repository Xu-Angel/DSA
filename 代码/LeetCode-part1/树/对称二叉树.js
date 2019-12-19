// https://leetcode-cn.com/problems/symmetric-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  return root ? checkNode(root.left, root.right) : true;
};

function checkNode(left, right) {
  while (left || right) {
    // 在这里打印日志观察访问顺序和镜像对应位置的值
    // console.log(left && left.val, right && right.val);
    if (!left || !right) return false;
    if (left.val !== right.val) return false;
    if (!checkNode(left.right, right.left)) return false;

    left = left.left;
    right = right.right;
  }
  return true;
}
