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
    int getDecimalValue(ListNode* head) {
        // ListNode *p=head;
        // int flag=0;
        // while(p)
        // {
        //     flag++;
        //     p=p->next;
        // }
        // int sum=0;
        // while(head)
        // {
        //     sum+=head->val*pow(2,--flag);
        //     head=head->next;
        // }
        // return sum;
        int sum=0;
        while(head)
        {
            sum=sum*2+head->val;
            head=head->next;
        }
        return sum;
    }
};
