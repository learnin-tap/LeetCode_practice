/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let p=l1,q=l2;
    while(p.next && q.next){
        p.val+=q.val;
        p=p.next;
        q=q.next;
    }
    p.val+=q.val;
    if(!p.next)
        p.next=q.next;
    var list=new ListNode(1),flag=l1;
    while(flag){
        if(flag.val>=10){
            flag.val%=10;
            if(flag.next)
                flag.next.val+=1;
            else
                flag.next=list;
        }
        flag=flag.next;
    }
    return l1;
};