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
var levelOrder = function(root) {
    if(!root)
        return []
    const res = [], queue = [root]
    while(queue.length) {
        const node = queue.shift()  // 一个个取
        res.push(node.val)
        if(node.left)   // 先压左孩子
            queue.push(node.left)
        if(node.right)  // 再压右孩子
            queue.push(node.right)
    }
    return res   
};