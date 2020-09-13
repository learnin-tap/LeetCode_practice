/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
    let res = [], stack = []
    // // 递归写法
    // if(!root)
    //     return []
    // let inorderTraverseNode = node => {
    //     if(node) {
    //         inorderTraverseNode(node.left)
    //         res.push(node.val)
    //         inorderTraverseNode(node.right)
    //     }
    // }
    // inorderTraverseNode(root)
    // return res

    // 非递归写法
    if(!root)
        return []
    while(root || stack.length > 0) {
        while(root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        res.push(root.val)
        root = root.right
    }
    return res
};