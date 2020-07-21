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
    ListNode* reverseList(ListNode* head) {
        ListNode *L=new ListNode,*temp;
        while(head){
            temp=head->next;
            head->next=L->next;
            L->next=head;
            head=temp;
        }
        return L->next;
    }
};
