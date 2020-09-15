/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // let flag = 1
    // let isSame = function(p, q) {
    //     if((!p && q) || (p && !q))
    //         flag = 0
    //     if(p && q) {
    //         if(p.val !== q.val)
    //             flag = 0
    //         isSame(p.left, q.left)
    //         isSame(p.right, q.right)
    //     }
    // }
    // isSame(p, q)
    // return  flag

    if(!p && !q)
        return true
    if(!p || !q)
        return false
    return p.val===q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};