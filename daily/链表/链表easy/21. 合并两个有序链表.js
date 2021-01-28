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
    // 递归写法O(n+m) O(n+m)时间、空间复杂度 n,m分别为两链表长度
    // if(l1==null)
    //     return l2
    // if(l2==null)
    //     return l1
    // if(l1.val<l2.val) {
    //     l1.next = mergeTwoLists(l1.next, l2)
    //     return l1
    // } else {
    //     l2.next = mergeTwoLists(l1, l2.next)
    //     return l2
    // }

    // 非递归写法，O(n+m)时间 O(1)空间
    const newList = new ListNode()
    let cur = newList
    while(l1 && l2) {
        if(l1.val<l2.val) {
            cur.next = l1
            l1 = l1.next
        } else {
            cur.next = l2
            l2 = l2.next
        }
        cur = cur.next
    }
    cur.next = l1===null ? l2 : l1
    return newList.next
};