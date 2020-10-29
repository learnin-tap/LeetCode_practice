/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    // 回溯
    // const helper = (root, cur) => {
    //     if(!root)
    //         return 0
    //     cur = cur * 10 + root.val
    //     if(!root.left && !root.right)
    //         return cur
    //     return helper(root.left, cur) + helper(root.right, cur)
    // }
    // return helper(root, 0)


    // let sum = 0
    // const helper = (root, path) => {
    //     if(!root)
    //         return
    //     path.push(root.val)
    //     if(!root.left && !root.right)
    //         sum += Number(path.join(''))
    //     else {
    //         helper(root.left, path)
    //         helper(root.right, path)
    //     }
    //     console.log(path)
    //     path.pop()
    // }
    // helper(root, [])
    // return sum

    // DFS
    const helper = (root, cur) => {
        if(!root)
            return 0
        cur = 10 * cur + root.val
        if(!root.left &&!root.right)
            return cur
        return helper(root.left, cur) + helper(root.right, cur)
    }
    return helper(root, 0)
};