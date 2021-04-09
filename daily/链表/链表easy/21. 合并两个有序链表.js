/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // 递归写法 时间O(m+n),空间O(m+n)  m+n为两链表长度之和
    // if(!l1) return l2
    // if(!l2)  return l1
    // if(l1.val<l2.val) {
    //     l1.next = mergeTwoLists(l1.next, l2)
    //     return l1
    // }
    // else {
    //     l2.next = mergeTwoLists(l1, l2.next)
    //     return l2
    // }

    // 非递归写法，时间O(m+n),空间O(1)
    let res = new ListNode(), p = res
    while(l1 && l2) {
        if(l1.val<l2.val) {
            p.next = l1
            l1 = l1.next
        } else {
            p.next = l2
            l2 = l2.next
        }
        p = p.next
    }
    p.next = l1==null ? l2 : l1
    return res.next
};