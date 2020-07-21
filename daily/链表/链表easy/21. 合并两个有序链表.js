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
var mergeTwoLists = function(l1, l2) {
    var flag=new ListNode,p=flag;
    while(l1 && l2)
    {
        if(l1.val>l2.val){
            p.next=l2;
            l2=l2.next;
        }
        else{
            p.next=l1;
            l1=l1.next;
        }
        p=p.next;
    }
    p.next=(l1==null)?l2:l1;
    return flag.next;

    //递归写法
    // if(l1==null)
    //     return l2;
    // if(l2==null)
    //     return l1;
    // if(l1.val>l2.val){
    //     l2.next=mergeTwoLists(l1,l2.next);
    //     return l2;
    // }
    // else{
    //     l1.next=mergeTwoLists(l1.next,l2);
    //     return l1;
    // }
};