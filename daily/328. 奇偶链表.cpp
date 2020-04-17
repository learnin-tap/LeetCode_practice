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
    ListNode* oddEvenList(ListNode* head) {
        if(!head)
            return NULL;
        ListNode *p=head,*q=head->next;
        ListNode *temp_p=p,*temp_q=q;   //������λ����ż�ڵ�
        while(q && q->next)  //�ڵ�q����ǰ����
        {
            //�ڵ�p q�ֱ������ż�ڵ�
            p->next=p->next->next;  
            q->next=q->next->next;  
            p=p->next;
            q=q->next;
        }
        p->next=temp_q; //��ڵ�ĩ��������λ��ż�ڵ�
        return temp_p;
    }
};
