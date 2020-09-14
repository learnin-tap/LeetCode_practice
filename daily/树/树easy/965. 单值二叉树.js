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
var isUnivalTree = function(root) {
    if(!root)
        return false
    let res = [], stack = [], last = null
    let flag = root.val
    while(root || stack.length > 0) {
        while(root) {
            stack.push(root)
            root = root.left
        }
        root = stack[stack.length-1]
        if(!root.right || root.right === last) {
            root = stack.pop()
            if(root.val!==flag)
                return false
            last = root
            root = null
        } else
            root = root.right
    }
    return true
};