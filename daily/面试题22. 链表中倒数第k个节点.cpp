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
    ListNode* getKthFromEnd(ListNode* head, int k) {
        // int sum=0;
        // ListNode *p=head;
        // while(p)
        // {
        //     p=p->next;
        //     sum++;
        // }
        // int temp=sum-k;
        // while(temp--)
        //     head=head->next;
        // return head;

        ListNode *fast=head,*slow=head;
        int flag=0;
        while(fast)
        {
            if(flag>=k)
                slow=slow->next;
            fast=fast->next;
            flag++;
        }
        return slow;
    }
};
