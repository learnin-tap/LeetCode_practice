/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // // 递归写法
    // if(!root)
    //     return true
    // let isSame = (left, right) => {
    //     if(left === null && right === null)
    //         return true
    //     if(left && right) {
    //         return left.val === right.val && isSame(left.left, right.right) && isSame(left.right, right.left)
    //     }
    //     return false    //这种情况属于有一个有值，有一个空值; 不可能相等，直接false
    // }
    // return isSame(root.left, root.right)

    // 非递归写法
     if(!root)
        return true
    let leftStack = [], rightStack = []
    let curLeft = root.left, curRight = root.right
    while(curLeft || curRight || leftStack.length || rightStack.length) {
        while(curLeft) {
            leftStack.push(curLeft)
            curLeft = curLeft.left
        }
        while(curRight) {
            rightStack.push(curRight)
            curRight = curRight.right
        }
        if(leftStack.length !== rightStack.length)  // 栈的高度不相等，说明结构不对称
            return false
        curLeft = leftStack.pop()
        curRight = rightStack.pop()
        if(curLeft.val !== curRight.val)    // 两个栈出栈的节点值不相等 不对称
            return false
        curLeft = curLeft.right
        curRight = curRight.left
    }
    return true
};