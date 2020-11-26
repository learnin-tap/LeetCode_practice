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
var addTwoNumbers = function(l1, l2) {
    // 方法1：在迭代中计算，这种方法略繁琐，很多情况需要考虑到，不推荐
    // let p = l1, q = l2, flag = 0
    // while(p && p.next && q && q.next) {
    //     p.val = p.val + q.val + flag
    //     if(p.val>=10) {
    //         flag = 1
    //         p.val %= 10
    //     }
    //     else
    //         flag = 0
    //     p = p.next
    //     q = q.next
    // }
    // const newList = new ListNode(1)
    // let temp = 0   //记录进位
    // p.val = p.val + q.val + flag
    // if(!p.next && !q.next && p.val>=10) {    //都无后续的情况
    //     p.val %= 10
    //     p.next = newList
    // }
    // if(!p.next && q.next)   // p 后续无值但 q 有，把 q 的接过来
    //     p.next = q.next
    // while(p && p.next) {    //正常迭代
    //     p.val+=temp
    //     if(p.val>=10) {
    //         p.val %= 10
    //         temp = 1
    //     } else
    //         temp = 0
    //     p = p.next
    // }
    // if(temp==1) {
    //     p.val += temp
    //     if(p.val>=10) {
    //         p.val %= 10
    //         p.next = newList
    //     }
    // }
    // return l1


    // 方法2：先累加完，再重新计算进位等情况，比较简单的处理方法，很稳
    let p = l1, q = l2
    while(p.next && q.next) {
        p.val += q.val
        p = p.next
        q = q.next
    }
    p.val += q.val
    if(!p.next) //不管q有没有后续都接过来，即使没有也不影响
        p.next = q.next
    const newList = new ListNode(1)
    p = l1  //重头再遍历
    while(p) {
        if(p.val>=10) {
            p.val %= 10
            if(p.next)
                p.next.val += 1
            else
                p.next = newList
        }
        p = p.next
    }
    return l1
};