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
    let fast = head, slow = head, flag = 0
    while(fast) {
        if(flag>n)
            slow = slow.next
        fast = fast.next
        flag++
    }
    if(flag==n && slow==head)   //倒数第一个节点是头结点的情况
        return head.next
    slow.next = slow.next.next  //删除的这个节点
    return head
};