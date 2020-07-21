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
    bool isPalindrome(ListNode* head) {
        if(!head || !head->next)
            return true;
        ListNode *fast=head,*slow=head;
		while(fast && fast->next) //���ÿ���ָ���ҵ��м�ֵ
        {
            slow=slow->next;
            fast=fast->next->next;
        }

        ListNode *L=new ListNode;   //�½�һ�������ź�벿�ַ�ת��ֵ
		ListNode *temp;    //���ڴ��slow����һ��ָ����Ϊͷ�巨��ʹ�䶪ʧ
        while(slow)
        {
            temp=slow->next;
            slow->next=L;
            L=slow;
            slow=temp;
        }
        
        while(L && L->next )
        {
            if(head->val!=L->val)
                return false;
            head=head->next;
            L=L->next;
        }
        return true;
    }
};
