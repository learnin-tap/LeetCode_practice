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
var findSecondMinimumValue = function(root) {
    let res = []
    let preOrderNode = root => {
        if(root) {
            preOrderNode(root.left)
            res.push(root.val)
            preOrderNode(root.right)
        }
    }
    preOrderNode(root)
    return Array.from(new Set(res.sort()))[1] || -1
};