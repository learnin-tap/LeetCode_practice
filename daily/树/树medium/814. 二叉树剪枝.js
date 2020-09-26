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
var pruneTree = function(root) {
    if(!root)   //终止条件
        return null
    // 一直递归
    root.left = pruneTree(root.left)
    root.right = pruneTree(root.right)
    // 不满足条件返回null，满足条件返回该节点
    if(root.val === 0 && !root.left && !root.right)
        return null
    return root
};