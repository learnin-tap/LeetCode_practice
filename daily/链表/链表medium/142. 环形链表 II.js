/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    // // 哈希表写法
    // let map = new Map(), cur = head
    // while(cur) {
    //     if(map.has(cur))
    //         return cur
    //     map.set(cur)
    //     cur = cur.next
    // }
    // return null
    
    // 数学公式写法
    let fast = head, slow = head
    while(fast && fast.next) {
        fast = fast.next.next   //快指针走两步
        slow = slow.next        //慢指针走一步
        if(fast === slow) {     // 涉及数学公式的计算
            fast = head
            while(fast) {
                if(fast == slow) {
                    return fast
                }
                fast = fast.next
                slow = slow.next
            }
        }
    }
    return null
};