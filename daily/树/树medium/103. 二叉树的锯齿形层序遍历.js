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
var zigzagLevelOrder = function(root) {
    if(!root)
        return []
    const res = [], queue = [root]
    let flag = 0    //记录遍历到第几层
    while(queue.length) {
        let len = queue.length, temp = []   //temp存放每层节点，len为每层节点总数
        for(let i=0; i<len; i++) {
            root = queue.shift()
            temp.push(root.val)
            if(root.left) {queue.push(root.left)}
            if(root.right) {queue.push(root.right)}
        }
        flag++
        if(flag & 1)   
            res.push(temp)     
        else
            res.push(temp.reverse())
    }
    return res
};