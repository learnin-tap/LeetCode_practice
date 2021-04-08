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
var reverseList = function(head) {
    //  ±º‰O(n)£¨ø’º‰O(1)
    let p = head, q = null
    while(p) {
        let temp = p.next
        p.next = q
        q = p
        p = temp
    }
    return q
};