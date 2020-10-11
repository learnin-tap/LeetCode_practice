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
var getMinimumDifference = function(root) {
    let res = [], stack = []
    while(root || stack.length) {   //中序遍历
        while(root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        res.push(root.val)
        root = root.right
    }

    let flag = res[1]-res[0]    //中序遍历二叉搜索树得到的是排序好的结果
    for(let i=0; i<res.length-1; i++) {
        if(flag>res[i+1]-res[i])    //迭代得出最小值
            flag = res[i+1]-res[i]
    }
    return flag
};