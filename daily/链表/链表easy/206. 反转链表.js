/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 非递归法 时间O(n)，空间O(1)
    // let L = null, temp = null
    // while(head) {
    //     temp = head.next
    //     head.next = L
    //     L = head
    //     head = temp
    // }
    // return L

    // 递归法,时间O(n),空间O(n)
    if(head==null || head.next==null)
        return head
    const cur = reverseList(head.next)
    head.next.next = head
    head.next = null
    return cur
};