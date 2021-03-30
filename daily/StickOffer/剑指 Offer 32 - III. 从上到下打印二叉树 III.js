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
    const res = [], queue = [root]
    let sum = 0 //记录层数
    while(queue.length) {
        const temp = [], len = queue.length //temp数组存放遍历时每层的所有节点
        sum++
        for(let i=0; i<len; i++) {  //len即为每层节点的总数
            const node = queue.shift()
            temp.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        // 交叉存入结果中
        if(sum%2==0)
            res.push(temp.reverse())
        else
            res.push(temp)
    }
    return res
};