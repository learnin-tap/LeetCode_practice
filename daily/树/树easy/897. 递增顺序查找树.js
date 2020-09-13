/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    // // 递归写法
    // let res = [], newRoot, flag
    // let inOrderTraverseNode = node => {
    //     if(node) {
    //         inOrderTraverseNode(node.left)
    //         if(!newRoot) {
    //             newRoot = new TreeNode(node.val)
    //             flag = newRoot
    //         } else {
    //             flag.right = new TreeNode(node.val)
    //             flag = flag.right
    //         }
    //         inOrderTraverseNode(node.right)
    //     }
    // }
    // inOrderTraverseNode(root)
    // return newRoot

    // 非递归写法
    let res =  [], stack = [], newRoot, flag
    while(root || stack.length>0) {
        while(root) {
            stack.push(root)
            root = root.left
        }
        root = stack.pop()
        if(!newRoot) {  //无根节点则创建根节点
            newRoot = new TreeNode(root.val)
            flag = newRoot
        } else {        //构成只有一个右子节点的节点
            flag.right = new TreeNode(root.val)
            flag = flag.right
        }
        root = root.right
    }
    return newRoot
};