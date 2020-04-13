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
var middleNode = function(head) {
    var fast=head,slow=head;
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow;
};