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
 * @return {number}
 */
// 遍历每一个节点，找出每一个节点的最大路径和，迭代最大值
var maxPathSum = function(root) {
    if(!root)
        return 0
    let sum = root.val //最大路径和先为根节点
    const dfs = (root) => {
        let leftSum = !root.left ? 0 : dfs(root.left)    //左孩子最大和
        let rightSum = !root.right ? 0 : dfs(root.right) //右孩子最大和
        sum = Math.max(sum, leftSum + rightSum + root.val)  //迭代最大路径和
        let res = Math.max(leftSum, rightSum) + root.val
        return res >= 0 ? res : 0   // 每次返回遍历到该节点的最大路径和
    }
    dfs(root)
    return sum
};