/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res = []
    if(!root)
        return res
    if(!root.left && !root.right) {
        res.push(`${root.val}`)
        return res
    }
    let leftS = binaryTreePaths(root.left)
    for(let i=0; i<leftS.length; i++) {
        res.push(`${root.val}->${leftS[i]}`)
    }
    let rightS = binaryTreePaths(root.right)
    for(let i=0; i<rightS.length; i++) {
        res.push(`${root.val}->${rightS[i]}`)
    }
    return res
};