/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // var a=headA,b=headB,sum_a=0,sum_b=0;
    // while(a)
    // {
    //     a=a.next;
    //     sum_a++;
    // }
    // while(b)
    // {
    //     b=b.next;
    //     sum_b++;
    // }
    // a=headA,b=headB;
    // var diff=Math.abs(sum_a-sum_b);
    // if(sum_a>sum_b)
    //     while(diff--)
    //         a=a.next;
    // else
    //     while(diff--)
    //         b=b.next;
    // while(a)
    // {
    //     if(a==b)
    //         return a;
    //     a=a.next;
    //     b=b.next;
    // }
    // return null;
    var p=headA,q=headB;
    if(!headA || !headB)
        return null;
    while(p!=q){
        p=p?p.next:headB;
        q=q?q.next:headA;
    }
    return p;
};