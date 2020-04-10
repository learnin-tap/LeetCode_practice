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
    ListNode* removeElements(ListNode* head, int val) {
       ListNode *p=new ListNode,*temp;
       p->next=head,temp=p;
       while(temp->next){
           if(temp->next->val==val)
                temp->next=temp->next->next;
            else
                temp=temp->next;
       }
        return p->next;   
    }
};
