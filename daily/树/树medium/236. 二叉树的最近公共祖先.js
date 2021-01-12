/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 1. 先序遍历这棵树
// 2. 递归，返回值有四种可能 null、p、q、公共祖先
var lowestCommonAncestor = function(root, p, q) {
    // 没找到为 null
    if(root==null)
        return null
    // 找到指定节点就返回它
    if(root==p || root==q)
        return root

    // 非null非p非q则递归左右子树
    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)

    // left right都有值，此时root就是最近祖先
    if(left && right)
        return root
    // 只有左子树找到了，返回这个值
    else if(left)
        return left
    // 只有右子树找到了，返回这个值
    else if(right)
        return right
    // 都没找到返回空
    return null
};