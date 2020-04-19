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
   var p=l1,q=l2;
    var l1_temp=new ListNode,l2_temp=new ListNode,aaa=new ListNode(1),x=l1_temp,y=l2_temp;
    var sum_l1=0,sum_l2=0;
    while(l1)
    {
        p=l1.next;
        l1.next=x.next;
        x.next=l1;
        l1=p;
        sum_l1++;
    }
    while(l2)
    {
        q=l2.next;
        l2.next=y.next;
        y.next=l2;
        l2=q;
        sum_l2++;
    }
    x=l1_temp.next,y=l2_temp.next;
        if(sum_l1>=sum_l2){
            while(y){
                x.val+=y.val;
                if(x.val>=10){
                    x.val%=10;
                    if(x.next)                    
                        x.next.val+=1;                                        
                    else
                        x.next=aaa;
                    
                }
                x=x.next;
                y=y.next;
            }
             while(x&&x.next)
            {
                if(x.val/10==1){
                    x.val=x.val%10;
                    x.next.val= x.next.val+1;
                }
                x=x.next;
            }
            if(x&&x.val>=10){
                x.val%=10;
                x.next=aaa;
            }
            var res=new ListNode,flag=res;
            x=l1_temp.next;
            while(x)
            {
                p=x.next;
                x.next=flag.next;
                flag.next=x;
                x=p;
            }
            return res.next;
        }
        else if(sum_l1<sum_l2){
            while(x){
                y.val+=x.val;
                if(y.val>=10){
                    y.val%=10;
                    y.next.val+=1;
                }
                x=x.next;
                y=y.next;
            }
            while(y&&y.next)
            {
                if(y.val/10==1){
                    y.val=y.val%10;
                    y.next.val= y.next.val+1;
                }
                y=y.next;
            }
            if(y&&y.val>=10){
                y.val%=10;
                y.next=aaa;
            }
            var res=new ListNode,flag=res;
            y=l2_temp.next;
            while(y)
            {
                p=y.next;
                y.next=flag.next;
                flag.next=y;
                y=p;
            }
            return res.next;
        }
        return NULL;
};
