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
    var fast=head,slow=head;
    if(!head || !head.next)
        return true;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }

    var L=new ListNode,temp;//新建一个链表存放后半部分反转的值
    while(slow){
        
        temp=slow.next;
        slow.next=L;
        L=slow;
        slow=temp;
    }

    while(L && L.next){
        if(head.val!=L.val)
            return false;        
        head=head.next;
        L=L.next;
    }
    return true;
};