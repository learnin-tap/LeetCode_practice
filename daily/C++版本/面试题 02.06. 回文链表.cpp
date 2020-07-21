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
        while(fast && fast->next)   //快慢指针找出中点
        {
            slow=slow->next;
            fast=fast->next->next;
        }
        ListNode *L=new ListNode,*temp,*p=head;
        while(p!=slow)  //前半部分逆序
        {
            temp=p->next;
            p->next=L;
            L=p;
            p=temp;
        }
        if(fast)    //这是奇数的情况，慢指针要往后走一位才能对称
            slow=slow->next;
        while(L && L->next)
        {
            
            if(L->val!=slow->val)
                return false;
            L=L->next;
            slow=slow->next;
        }
        return true;
    }
};
