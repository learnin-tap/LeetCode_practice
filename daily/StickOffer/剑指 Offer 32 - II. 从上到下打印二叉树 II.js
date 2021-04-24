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
    // let res = [], queue = [root]
    // while(queue.length) {
    //     let len = queue.length, arr = []
    //     for(let i=0; i<len; i++) {
    //         const node = queue.shift()
    //         arr.push(node.val)
    //         if(node.left)
    //             queue.push(node.left)
    //         if(node.right)
    //             queue.push(node.right)
    //     }
    //     res.push(arr)
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
    return res
};