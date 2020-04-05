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
var deleteDuplicates = function(head) {
    var p=head;
    while(p&&p.next)    //p.next也要不为空，否则会报错
    {
        if(p.val==p.next.val)
            p.next=p.next.next;
        else
            p=p.next;
    }
    return head;
};