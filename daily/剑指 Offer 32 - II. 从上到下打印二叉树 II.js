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
var levelOrder = function(root) {
    if(!root)
        return []
    let res = [], queue = [root], level = 0
    while(queue.length) {
        res[level] = []
        let levelNum = queue.length
        while(levelNum--) {
            const front = queue.shift()
            res[level].push(front.val)
            if(front.left)  queue.push(front.left)
            if(front.right) queue.push(front.right)
        }
        level++
    }
    return res
};