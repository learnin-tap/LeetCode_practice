/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    const res = new ListNode()
    res.next = head
    let prev = res
    while(head && head.next) {
        const cur = head.next   //指向head的下一个
        head.next = cur.next
        cur.next = head

        prev.next = cur
        prev = head //永远指向head
        head = head.next
    }
    return res.next
};