/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let sum = 0, stack = []
    if(!root)
        return 0
    while(root || stack.length) {
        while(root) {
            if(root.val>=L && root.val<=R)
                sum += root.val
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        root = root.right
    }
    return sum
};