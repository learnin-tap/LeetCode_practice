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
var reverse=function(head){
    var L=new ListNode,p=L;
    while(head)
    {
        var temp=head.next;
        head.next=p.next;
        p.next=head;
        head=temp;
    }
    return L.next;
}

var addTwoNumbers = function(l1, l2) {
        var p=reverse(l1),q=reverse(l2);
        var temp_p=p,flag;
        while(p && q)
        {        
            //将对应节点之和加到p上
            p.val+=q.val;
            flag=p;
            if(p.val>=10 && p.next){
                p.val%=10;
                p.next.val+=1;
            }
            p=p.next;
            q=q.next;
        }
        if(!p)
            flag.next=q;   //flag是p的前一个节点
        while(flag.next)
        {
            if(flag.val>=10){
                flag.val%=10;
                flag.next.val+=1;
            }
            flag=flag.next;
        }
        if(flag.val>=10){
            flag.val%=10;
            var node=new ListNode(1);
            flag.next=node;
        }
        return reverse(temp_p);
};