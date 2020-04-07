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
};