/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head || !head.next)
        return true;
    var fast=head,slow=head;
    while(fast && fast.next)
    {
        slow=slow.next;
        fast=fast.next.next;
    }
    var L=new ListNode,p=head,temp;
    while(p!=slow)
    {
        temp=p.next;
        p.next=L;
        L=p;
        p=temp;
    }
    if(fast)
        slow=slow.next;
    while(L && L.next)
    {
        if(L.val!=slow.val)
            return false;
        L=L.next;
        slow=slow.next;
    }
    return true;
};