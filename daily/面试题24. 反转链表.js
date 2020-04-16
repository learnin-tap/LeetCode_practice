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
    var L=new ListNode,temp;
    while(head)
    {
        temp=head.next;
        head.next=L.next;
        L.next=head;
        head=temp;
    }
    return L.next;
};