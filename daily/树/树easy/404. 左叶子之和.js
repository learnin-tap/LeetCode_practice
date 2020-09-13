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
var sumOfLeftLeaves = function(root) {   
    // let sum = 0
    // if(!root)
    //     return 0
    // if(root.left && !root.left.left && !root.left.right)
    //     sum+=root.left.val
    // return sum + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right)


    // 栈写法
    if(!root)
        return 0
    let sum = 0, stack = []
    stack.push([root, false])  //栈用于保存节点及判断该节点是否为左节点
    while(stack.length) {
        let [node, isLeft] = stack.pop()
        if(isLeft && !node.left && !node.right) //找到左子节点
            sum += node.val
        if(node.left)
            stack.push([node.left, true])
        if(node.right)
            stack.push([node.right, false])
    }
    return sum

};