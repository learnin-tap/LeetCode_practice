/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var p=new ListNode,temp;
    p.next=head,temp=p;
    while(temp.next){
        if(temp.next.val==val){
            temp.next=temp.next.next;
        }
        else    
            temp=temp.next;
    }
    return p.next;
};