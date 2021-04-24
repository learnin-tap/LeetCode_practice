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
    // 非递归写法
    // if(!root)
    //     return []
    // const res = [], queue = [root]
    // while(queue.length) {
    //     const node = queue.shift()  // 一个个取
    //     res.push(node.val)
    //     if(node.left)   // 先压左孩子
    //         queue.push(node.left)
    //     if(node.right)  // 再压右孩子
    //         queue.push(node.right)
    // }
    // return res

    // 递归写法
    const res = []
    const traversal = (root, level) => {
        if(root) {
            if(!res[level])
                res[level] = []
            res[level].push(root.val)
            traversal(root.left, level+1)
            traversal(root.right, level+1)
        }
    }
    traversal(root, 0)
    return res.flat()   //将每一层节点的数组抹平就是最终答案
};