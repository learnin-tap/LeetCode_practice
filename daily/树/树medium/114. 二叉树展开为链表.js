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
    // 递归写法1
    // if(!root)   //退出条件
    //     return null
    // flatten(root.left)  //递归左孩子
    // flatten(root.right) //递归右孩子
    // let temp = root.right   //先把右孩子存起来
    // root.right = root.left  //然后把右孩子换成左孩子
    // root.left = null    //左孩子要置空
    // while(root.right)   //把原来的左孩子都插到右边来
    //     root = root.right
    // root.right = temp   //把真正的右孩子接在原左孩子的右边
    
    // 递归写法2
    // let pre = null
    // const dfs = node => {
    //     if(!node)
    //         return null
    //     dfs(node.right)
    //     dfs(node.left)
    //     node.right = pre
    //     node.left = null    //左孩子置空
    //     pre = node
    // }
    // dfs(root)
    // // return root  //原地修改，所以其实不用返回

    // 非递归写法
    if(root==null)
        return null
    const stack = []
    while(root || stack.length) {
        while(root) {
            stack.push(root)
            root = root.left
        }
        if(stack.length) {
            let node = stack.pop()
            root = node.right   //root需要指向右孩子，因为右孩子如果有左孩子就要进行上面的while循环
            let temp = node.right   //将右孩子存起来
            node.right = node.left  //然后把右孩子换成左孩子
            node.left = null  //左孩子要置空
            while(node.right)   //把原来的左孩子都插到右边来
                node = node.right
            node.right = temp   //把真正的右孩子接在原左孩子的右边  
        }
    }
    // return root //原地修改，所以不用return

};