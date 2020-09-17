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
var maxDepth = function(root) {
    // if(!root)
    //     return 0;
    // var left=maxDepth(root.left);
    // var right=maxDepth(root.right);
    // return 1+Math.max(left,right);

    // 精简版
    if(!root)
        return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};