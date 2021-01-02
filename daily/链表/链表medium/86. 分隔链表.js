/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const smallList = new ListNode(), biggerList = new ListNode()
    let p = smallList, q = biggerList
    while(head) {
        if(head.val < x) {
            p.next = head
            p = p.next
        } else {
            q.next = head
            q = q.next
        }
        head = head.next
    }
    q.next = null   //需要置空，防止成环
    p.next = biggerList.next
    return smallList.next
};