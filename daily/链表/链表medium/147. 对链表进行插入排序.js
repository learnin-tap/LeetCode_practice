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
var insertionSortList = function(head) {
    let res = new ListNode()
    res.next = head
    let cur = head, temp = null, prev = null
    while(cur && cur.next) {
        if(cur.val <= cur.next.val) {
            cur = cur.next
        } else {
            temp = cur.next, prev = res //定义在循环外面省内存消耗
            cur.next = cur.next.next
            while(prev.next.val <= temp.val) {  //找到排好序的位置为止
                prev = prev.next
            }
            temp.next = prev.next
            prev.next = temp
        }
    }
    return res.next
};