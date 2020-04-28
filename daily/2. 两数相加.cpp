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
        while(p->next && q->next)   //没有用p && q是因为两链表长度不一样的时候需要靠next把它们连起来
        {
            p->val+=q->val;
            p=p->next;
            q=q->next;
        }

        p->val+=q->val; //缺少一次相加操作
        if(!p->next)    //如果p遍历完了就要把q接上
            p->next=q->next;            
        ListNode *node=new ListNode(1),*flag=l1;
        while(flag)
        {
            if(flag->val>=10){
                flag->val%=10;
                if(flag->next)
                    flag->next->val+=1;
                else
                    flag->next=node;
            }
             flag=flag->next;   
        }
        return l1;
    }
};