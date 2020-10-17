/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 1. 前序数组第一个即根节点的位置，找根节点对应中序数组的索引位置 
// 2. 找到后分开成左右子树
// 3. 一直递归调用下去
var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length)
        return null
    let node = new TreeNode(preorder[0])    //先序遍历第一个元素即 根节点
    let i = inorder.indexOf(preorder[0])    //根节点在中序数组中的索引位置

    node.left = buildTree(preorder.slice(1, i+1), inorder.slice(0, i+1)) //构建左子树
    node.right = buildTree(preorder.slice(i+1), inorder.slice(i+1)) //构建右子树
    return node
};