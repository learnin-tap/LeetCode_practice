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
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        ListNode *p=headA,*q=headB;
        if(!headA || !headB)
            return NULL;
        while(p!=q)
        {
           p=p?p->next:headB;
           q=q?q->next:headA;
        }
        return p;
    }
};
