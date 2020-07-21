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
// ����ͷ�巨����
    ListNode* reverse(ListNode *head){
        ListNode *L=new ListNode,*p=L;
        while(head)
        {
            ListNode *temp=head->next;
            head->next=p->next;
            p->next=head;
            head=temp;
        }
        return L->next;
    }

    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode *p=reverse(l1),*q=reverse(l2);
        ListNode *temp_p=p,*flag;
        while(p && q)
        {        
            //����Ӧ�ڵ�֮�ͼӵ�p��
            p->val+=q->val;
            flag=p;
            if(p->val>=10 && p->next){
                p->val%=10;
                p->next->val+=1;
            }
            p=p->next;
            q=q->next;
        }
        if(!p)
            flag->next=q;   //flag��p��ǰһ���ڵ�
        while(flag->next)
        {
            if(flag->val>=10){
                flag->val%=10;
                flag->next->val+=1;
            }
            flag=flag->next;
        }
        if(flag->val>=10){
            flag->val%=10;
            ListNode *node=new ListNode(1);
            flag->next=node;
        }
        return reverse(temp_p);
    }
};
