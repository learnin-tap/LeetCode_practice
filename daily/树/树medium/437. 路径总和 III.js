/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if(!root)
        return 0

    let findPath = (root, sum) => {
        if(!root)
            return 0
        let res = 0
        if(root.val === sum)
            res++
        res += findPath(root.left, sum - root.val)
        res += findPath(root.right, sum - root.val)
        return res
    }

    let res = findPath(root, sum)   //包含root节点的情况
    res += pathSum(root.left, sum)
    res += pathSum(root.right, sum)
    return res

};