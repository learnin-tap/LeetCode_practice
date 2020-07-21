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
var oddEvenList = function(head) {
    if(!head)
        return null;
    var p=head,q=head.next,temp_p=p,temp_q=q;
    while(q && q.next)
    {
        p.next=p.next.next;
        q.next=q.next.next;
        p=p.next;
        q=q.next;
    }
    p.next=temp_q;
    return temp_p;
};