/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        // //双指针解法
        // ListNode *a=headA,*b=headB;
        // while(a != b)
        // {
        //     a=!a?headB:a->next;
        //     b=!b?headA:b->next;
        // }
        // return a;

        
        //较长的链表先跑完大于较短链表的部分，然后再一起跑向共同部分
        int len_A=0,len_B=0;
        ListNode *a=headA,*b=headB;
        while(a){
            a=a->next;
            len_A++;
        }
        while(b){
            b=b->next;
            len_B++;
        }
        a=headA,b=headB;
        int diff=abs(len_A-len_B);
        //谁长谁先跑完多余的
        if(len_A>len_B){    
            while(diff--)
                a=a->next;
        }
        else{
            while(diff--)
                b=b->next;
        }

        while(a && b){
            if(a==b)
                return a;
            a=a->next;
            b=b->next;
        }
        return NULL;    
    }
};
