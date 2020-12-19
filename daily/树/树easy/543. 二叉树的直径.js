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
// 遍历每个节点，以每个节点为中心点计算最长路径(左子树边长+右子树边长)，不断更新最大值
var diameterOfBinaryTree = function(root) {
    if(!root)
        return 0
    let sum = 0
    const dfs = root => {
        let leftMax = !root.left ? 0 : dfs(root.left)    //左子树的最大长度
        let rightMax = !root.right ? 0 : dfs(root.right) //右子树的最大长度
        sum = Math.max(sum, leftMax + rightMax) //迭代全局最长路径
        return Math.max(leftMax, rightMax) + 1  //返回遍历的这个节点的最长路径
    }
    dfs(root)
    return sum
};