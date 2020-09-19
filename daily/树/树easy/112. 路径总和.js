/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    // let stack = [root], sumStack = [sum - root.val]
     
    // while(stack.length > 0) {
    //     let node = stack.pop(), curSum = sumStack.pop()
    //     console.log(curSum)
    //     if(node.left === null && node.right === null && curSum===0)
    //         return true
    //     if(node.left !== null) {
    //         stack.push(node.left)
    //         sumStack.push(curSum - node.left.val)
    //     }
    //     if(node.right !== null) {
    //         stack.push(node.right)
    //         sumStack.push(curSum - node.right.val)
    //     }
    // }
    // return false

    if(!root)
        return false
    if(root && !root.left && !root.right)
        return root.val === sum
    if(hasPathSum(root.left, sum - root.val))
        return true 
    if(hasPathSum(root.right, sum - root.val))
        return true
    return false

};