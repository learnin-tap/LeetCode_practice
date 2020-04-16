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
 * @return {number}
 */
var kthToLast = function(head, k) {
    var fast=head,slow=head,flag=0;
    while(fast)
    {
        if(flag>=k)
            slow=slow.next;
        fast=fast.next;
        flag++;
    }
    return slow.val;
};