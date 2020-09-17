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
var countNodes = function(root) {
    // let sum = 0
    // let preTraverseNode = root => {
    //     if(root) {
    //         sum++
    //         preTraverseNode(root.left)
    //         preTraverseNode(root.right)
    //     }
    // }
    // preTraverseNode(root)
    // return sum
    
    if(!root)
        return 0
    return 1 + countNodes(root.left) + countNodes(root.right)
};