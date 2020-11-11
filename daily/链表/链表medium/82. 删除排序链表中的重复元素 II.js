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
    let newList = new ListNode()
    newList.next = head
    let fast = head, slow = newList //快慢指针，一前一后
    while(fast && fast.next) {
        if(fast.val == fast.next.val) {
            let flag = fast.val
            while(fast && fast.val == flag)
                fast = fast.next
            slow.next = fast
        }
        else {
            fast = fast.next
            slow = slow.next
        }
    }
    return newList.next
};