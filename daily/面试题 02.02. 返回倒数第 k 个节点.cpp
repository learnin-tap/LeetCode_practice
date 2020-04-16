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
    int kthToLast(ListNode* head, int k) {
        ListNode *fast=head,*slow=head;
        int flag=0;
        while(fast)
        {
            if(flag>=k)
                slow=slow->next;
            fast=fast->next;
            flag++;
        }
        return slow->val;
    }
};
