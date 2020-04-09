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
    // //双指针法
    // var a=headA,b=headB;
    // while(a!=b)
    // {
    //     a=!a?headB:a.next;
    //     b=!b?headA:b.next;
    // }
    // return a;


    //较长的链表先跑完大于较短链表的部分，然后再一起跑向共同部分，没有就返回空
    var a=headA,b=headB,len_a=0,len_b=0;
    while(a){
        a=a.next;
        len_a++;
    }
    while(b){
        b=b.next;
        len_b++;
    }

    a=headA,b=headB;    //要重新指向头结点
    var diff=Math.abs(len_b-len_a);
    if(len_a>len_b){
        while(diff--)
            a=a.next;
    }
    else{
        while(diff--)
            b=b.next;
    }
    
    while(a && b){
        if(a==b)
            return a;
        a=a.next;
        b=b.next;
    }
    return null;
};