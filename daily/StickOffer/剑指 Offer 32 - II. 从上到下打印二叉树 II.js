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
    // 非递归写法
    // if(!root)
    //     return []
    // let res = [], queue = [root], level = 0
    // while(queue.length) {
    //     res[level] = []
    //     let levelNum = queue.length
    //     while(levelNum--) {
    //         const front = queue.shift()
    //         res[level].push(front.val)
    //         if(front.left)  queue.push(front.left)
    //         if(front.right) queue.push(front.right)
    //     }
    //     level++
    // }
    // return res

    // 递归写法
    let res = []
    let traversal = (root,level) => {
        if(root) {
            if(!res[level])
                res[level] = []
            res[level].push(root.val)
            traversal(root.left, level+1)
            traversal(root.right, level+1)
        }
    }
    traversal(root, 0)
    return res
};