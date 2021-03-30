/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 1.利用递归
// 2.左右子树最大深度+自身的一层
var maxDepth = function(root) {
    if(root === null)
        return 0
    return Math.max(maxDepth(root.left),maxDepth(root.right)) + 1
};