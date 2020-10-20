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
    while(queue.length) {
        const temp = [], len = queue.length //temp数组存放遍历时每层的所有节点
        for(let i=0; i<len; i++) { //len即为每层的节点总数
            const node = queue.shift()
            temp.push(node.val)
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res.push(temp)  //每遍历完一层就加入结果中
    }
    return res
};