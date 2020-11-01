/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const res1 = [], res2 = [], stack = []
    const helper = (root, res) => {
        if(root) {
            if(!root.left && !root.right)
                res.push(root.val)
            helper(root.left, res)
            helper(root.right, res)
        }
    }
    
    helper(root1, res1)
    helper(root2, res2)
    return res1.join(',')===res2.join(',')
};