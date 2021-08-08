/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */  
var flatten = function(root) {
    // 递归写法
    // if(!root)  return null // 退出条件
    // flatten(root.left)  // 递归左孩子
    // flatten(root.right) // 递归右孩子
    // let temp = root.right   // 把左孩子存起来
    // root.right = root.left  // 把右孩子换成左孩子
    // root.left = null    // 左孩子置空
    // while(root.right)   // 一直找到最后一个右节点
    //     root = root.right
    // root.right = temp// 通过最后一个节点把之前保存的右子树接上去
    
    // 非递归写法1 拿到先序遍历结果后拆解子树
    // if(!root)  return null
    // const stack = [], res = []
    // while(root || stack.length) {
    //     while(root) {
    //         stack.push(root)
    //         res.push(root)
    //         root = root.left
    //     }
    //     root = stack.pop()
    //     root = root.right
    // }
    // // res为拿到的先序遍历数组
    // for(let i=1; i<res.length; i++) {
    //     const prev = res[i-1], cur = res[i]
    //     prev.left = null
    //     prev.right = cur
    // }

    // 非递归写法2 在先序遍历的过程中拆借子树
    if(!root) return null
    const stack = []
    while(root || stack.length) {
        while(root) {
            stack.push(root)
            root = root.left
        }
        if(stack.length) {
            let node = stack.pop()
            root = node.right// root需要指向右孩子，右孩子的左孩子需要进行上面的while循环
            const temp = node.right //保存右子树
            node.right = node.left
            node.left = null
            while(node.right)// 一直找到最后一个右节点
                node = node.right
            node.right = temp//通过最后一个右孩子把之前保存的右子树接上
        }
    }
};