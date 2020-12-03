/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(!root)
        return []
    const res = [], queue = [root]
    while(queue.length) {
        const temp = [], len = queue.length //temp为每一层的数组，len记录每一层的元素个数
        for(let i=0; i<len; i++) {
            root = queue.shift()
            temp.push(root.val)
            root.left && queue.push(root.left)
            root.right && queue.push(root.right)
        }
        res.unshift(temp)   //自底向上的顺序
    }
    return res
};