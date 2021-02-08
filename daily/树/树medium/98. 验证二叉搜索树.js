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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let pre = Number.MIN_SAFE_INTEGER, stack = []
    while(root || stack.length) {
        while(root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        if(pre>=root.val)   //中序遍历，前一个节点值如果小于后面的节点值则不满足二叉搜索树
            return false
        pre = root.val
        root = root.right
    }
    return true
};