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
var sortList = function(head) {
    let res = new ListNode()
    res.next = head
    let flag = head, p = null, q = null
    while(flag && flag.next) {
        if(flag.val<=flag.next.val)
            flag = flag.next
        else {
            p = flag.next, q = res  //p和q定义在外面，减小空间消耗
            flag.next = flag.next.next
            while(p.val>q.next.val) //插入排序
                q = q.next
            p.next = q.next
            q.next = p
        }
    }
    return res.next
};