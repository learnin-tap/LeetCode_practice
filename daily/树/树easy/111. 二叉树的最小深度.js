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
var minDepth = function(root) {
    if(!root)
        return 0
    let left = minDepth(root.left)
    let right = minDepth(root.right)
    let sum = 0
    if(left > 0 && right > 0)
        sum = Math.min(left, right)
    else if(left > 0 && right === 0)
        sum = left
    else if(right > 0 && left === 0)
        sum = right
    return 1 + sum
};