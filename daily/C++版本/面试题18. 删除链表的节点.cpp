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
    ListNode* deleteNode(ListNode* head, int val) {
        if(head->val==val)
            return head->next;
        ListNode *p=head,*temp;
        while(p && p->next)
        {
            if(p->next->val==val)
                p->next=p->next->next;            
            p=p->next;
        }
        return head;
    }   
};
