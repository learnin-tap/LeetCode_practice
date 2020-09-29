/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function(tree) {
    // let res = []
    // let traversal = (root, depth) => {
    //     if(root) {
    //         if(!res[depth])
    //             res[depth] = []
    //         res[depth].push(root.val)
    //         traversal(root.left, depth + 1)
    //         traversal(root.right, depth + 1)
    //     }
    // }
    // traversal(tree,0)
    // console.log(res,new ListNode(res))
    // return []

    if(!tree)
        return []
    if(!tree.left && !tree.right)
        return [new ListNode(tree.val)]
    const queue = [tree], res = []
    while(queue.length) {
        const nodeSum = queue.length
        let head = new ListNode(null)
        for(let i=0; i<nodeSum; i++) {
            const front = queue.shift()
            if(front.left)   queue.push(front.left)
            if(front.right)  queue.push(front.right)
            if(i==0) {
                head = new ListNode(front.val)  //每行第一个作为链表头插入数组
                res.push(head)
            } else {
                head.val = front.val    //不是第一个不插入数组，并将front的值赋给head
            }
            if(i<nodeSum-1) {
                head.next = new ListNode(front.val)
                head = head.next
            }
        }
    }
    return res
};