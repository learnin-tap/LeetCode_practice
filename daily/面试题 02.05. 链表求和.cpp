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
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode *p=l1,*q=l2;
        while(p->next && q->next)
        {
            p->val+=q->val;
            p=p->next;
            q=q->next;
        }
        p->val+=q->val; //把没加的最后一项加起来
        if(!p->next && q->next)    //如果p为空，q还有值就接上去    
            p->next=q->next;   
            
        ListNode *temp=new ListNode(1),*flag=l1;
        while(flag)
        {
            if(flag->val>=10){
                flag->val%=10;
                if(flag->next)
                    flag->next->val+=1;
                else
                    flag->next=temp;
            }
            flag=flag->next;
        }
        return l1;
    }

};