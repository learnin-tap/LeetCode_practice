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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // 递归写法
    // if(!root)
    //     return true
    // const isMirror = (l, r) => {
    //     if(!l && !r)
    //         return true
    //     if(!l || !r)
    //         return false
    //     if(l.val==r.val)
    //         return isMirror(l.left, r.right) && isMirror(l.right, r.left)
    //     return false
    // }
    // return isMirror(root.left, root.right)
    
    // 非递归写法
    if(!root)
       return true
    let queue = []
    queue.push(root.left, root.right)   //队列添加左右孩子
    while(queue.length) {
        let len = queue.length, temp = []
        for(let i=0; i<len; i+=2) {
            l = queue.shift(), r = queue.shift()
            // 其中有一个不存在直接返回 false
            if((l && !r) || (!l && r))
                return false
            if(l && r) {
                // 节点值不相同返回 false
                if(l.val!==r.val)
                    return false
                queue.push(l.left, r.right)
                queue.push(l.right, r.left)
            }
        }
    }
    return true
};