/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
        // 暴力解法
        var vec=[];
        if(!head.next){    //只有一个元素的情况
            vec.push(0);
            return vec;
        }      
        while(head)
        {
            let flag=0;
            let p=head.next;
            while(p)
            {
                if(p.val>head.val){
                    flag=1;
                    vec.push(p.val);
                    break;
                }
                p=p.next;
            }
            if(flag==0)
                vec.push(0);                 
            head=head.next;
        }
        return vec;
};