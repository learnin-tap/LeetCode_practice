/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    // 递归写法
    // let res = []
    // let inOrderTraverseNode = node => {
    //     if(node) {
    //         inOrderTraverseNode(node.left)
    //         res.push(node.val)
    //         inOrderTraverseNode(node.right)
    //     }
    // }
    // inOrderTraverseNode(root)
    // return res[res.length-k]

    // 非递归写法
    let res = [], stack = []
    while(root || stack.length > 0) {
        while(root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        res.push(root.val)
        root = root.right
    }
    return res[res.length-k]
};