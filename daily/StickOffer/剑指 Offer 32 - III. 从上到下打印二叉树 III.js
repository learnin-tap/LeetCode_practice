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
    // const queue = [root]
    // let flag = 0, res = []
    // while(queue.length) {
    //     flag++
    //     const len = queue.length, arr = []
    //     for(let i=0; i<len; i++) {
    //         node = queue.shift()
    //         arr.push(node.val)
    //         if(node.left)  queue.push(node.left)
    //         if(node.right) queue.push(node.right)
    //     }
    //     flag % 2 == 1 && res.push(arr)
    //     flag % 2 == 0 && res.push(arr.reverse())
    // }
    // return res

    // 递归写法
    if(!root)
        return []
    const res = []
    const reversal = (root, level) => {
        if(root) {
            if(!res[level])
                res[level] = []
            // 奇偶异类
            level%2==0 && res[level].push(root.val)
            level%2==1 && res[level].unshift(root.val)
            reversal(root.left, level+1)
            reversal(root.right, level+1)
        }
    }
    reversal(root, 0)
    return res
};