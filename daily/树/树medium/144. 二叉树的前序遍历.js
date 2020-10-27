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
var preorderTraversal = function(root) {
    // 递归写法
    // if(!root)
    //     return []
    // const res = []
    // const preorder = (root) => {
    //     if(root) {
    //         res.push(root.val)
    //         preorder(root.left)
    //         preorder(root.right)
    //     }
    // }
    // preorder(root)
    // return res

    // 迭代写法1
    // const res = [], stack = []
    // while(root || stack.length) {
    //     while(root) {
    //         stack.push(root)
    //         res.push(root.val)
    //         root = root.left 
    //     }
    //     root = stack.pop()
    //     root = root.right
    // }
    // return res

    // 迭代写法2
    if(!root)
        return []
    const res = [], stack=[root]
    while(stack.length) {
        const cur = stack.pop()
        res.push(cur.val)
        if(cur.right)
            stack.push(cur.right)
        if(cur.left)
            stack.push(cur.left)
    }
    return res
};