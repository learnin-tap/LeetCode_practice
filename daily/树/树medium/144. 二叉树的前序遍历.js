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
var preorderTraversal = function(root) {
    // 递归写法
    // let res = []
    // let preOrderTravelNode = function(node) {
    //     if(node) {
    //         res.push(node.val)
    //         preOrderTravelNode(node.left)
    //         preOrderTravelNode(node.right)
    //     }
    // }
    // preOrderTravelNode(root)
    // return res


    // 非递归写法
    let res = [], stack = []
    while(root || stack.length > 0) {
        while(root) {
            res.push(root.val)
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        root = root.right
    }
    return res
};