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
var getKthFromEnd = function(head, k) {
    // var sum=0,p=head;
    // while(p)
    // {
    //     sum++;
    //     p=p.next;
    // }
    // var temp=sum-k;
    // while(temp--)
    // {
    //     head=head.next;
    // }
    // return head;

    var fast=head,slow=head,flag=0;
    while(fast)
    {
        if(flag>=k)
            slow=slow.next;
        fast=fast.next;
        flag++;
    }
    return slow;
};