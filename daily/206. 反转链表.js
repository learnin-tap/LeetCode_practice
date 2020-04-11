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
var reverseList = function(head) {
    var L=new ListNode; //建新表来存放返回结果
    var temp=null;
    while(head)
    {
        temp=head.next; //temp用于保存head的下一个指向，因为后面操作会让它丢失
        head.next=L.next;
        L.next=head;
        head=temp;  //把next的下一个节点接回来
    }
    return L.next;
};