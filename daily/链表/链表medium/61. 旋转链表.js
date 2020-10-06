/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next)
        return head
    let n = 0, curr = head, map = new Map()
    while(curr && ++n) {
        map.set(n, curr)
        curr = curr.next
    }
    k = k % n
    map.get(n).next = head
    head = map.get(n-k).next
    map.get(n-k).next = null
    return head
};