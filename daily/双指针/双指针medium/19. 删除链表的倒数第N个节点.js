/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var fast=head,slow=head,flag=0;
    while(fast)
    {
        if(flag>=n+1)  //为了定位这个倒数节点的前一位，便于后面节点的删除
            slow=slow.next;
        fast=fast.next;
        flag++;
    }
    if(slow==head && flag==n)   //如果是倒数第一个节点就返回除头结点之外的链表元素
        return head.next;
    slow.next=slow.next.next;   //所谓的删除的这个元素
    return head;
};