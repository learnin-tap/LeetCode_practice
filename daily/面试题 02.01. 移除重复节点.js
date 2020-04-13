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
var removeDuplicateNodes = function(head) {
    if(!head)
        return head;
    var set=new Set();
    var p=head;
    set.add(head.val);
    while(p.next)
    {
        if(!set.has(p.next.val)){
            set.add(p.next.val);
            p=p.next;
        }
        else{
            p.next=p.next.next;
        }            
    }
    return head;
};