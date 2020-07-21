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
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode *fast=head,*slow=head;
        int flag=0;
        while(fast)
        {
            if(flag>=n+1)
                slow=slow->next;
            fast=fast->next;
            flag++;
        }
        if(slow==head && flag==n)
            return head->next;
        slow->next=slow->next->next;
        return head;
    }
};
