/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    // // 递归写法
    // let res = []
    // let traversal = root => {
    //     if(root) {
    //         res.push(root.val)  
    //         root.children.forEach(item => {
    //             traversal(item)
    //         })
    //     }
    // }
    // traversal(root)
    // return res

    // 非递归写法
    if(!root)
        return []
    let res = [], stack = [root]
    while(stack.length) {
        let cur = stack.pop()
        res.push(cur.val)
        for(let i=cur.children.length-1; i>=0; i--) {
            stack.push(cur.children[i])
        }
    }
    return res
};