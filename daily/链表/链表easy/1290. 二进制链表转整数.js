/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    // var p=head,flag=0;
    // while(p)
    // {
    //     flag++;
    //     p=p.next;
    // }
    // var sum=0;
    // while(head)
    // {
    //     sum+=head.val*Math.pow(2,--flag);
    //     head=head.next;
    // }
    // return sum;

    var sum=0;
    while(head)
    {
        sum=sum*2+head.val;
        head=head.next;
    }
    return sum;
};