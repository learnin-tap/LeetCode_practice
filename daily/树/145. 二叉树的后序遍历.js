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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    // //递归写法
    // let res = []
    // let _postOrderTraverseNode = function(root) {
    //     if(root) {
    //         _postOrderTraverseNode(root.left)
    //         _postOrderTraverseNode(root.right)
    //         res.push(root.val)
    //     }
    // }
    // _postOrderTraverseNode(root)
    // return res

    // 非递归写法
    let res = [], stack = [], last = null
    while(root || stack.length > 0) {
        while(root) {
            stack.push(root)
            root = root.left
        }
        root = stack[stack.length-1]
        if(!root.right || root.right===last) {
            root = stack.pop()
            res.push(root.val)
            last = root
            root = null
        } else {
            root = root.right
        }
    }
    return res
};