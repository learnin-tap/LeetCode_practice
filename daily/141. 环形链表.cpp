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
    bool hasCycle(ListNode *head) {
        // if(!head)    //哈希表法
        //     return false;
        // ListNode *p=head;
        // unordered_set<ListNode*> s;
        // while(s.find(p)==s.end())
        // {
        //     s.insert(p);
        //     p=p->next;
        //     if(!p)
        //         return false;
        // }
        // return true;
        
        if(!head)   //快慢指针法
            return false;
        ListNode *p=head,*q=head;
        while(p && p->next)
        {
            p=p->next->next;
            q=q->next;
            if(p==q)
                return true;
        }
        return false;  
    }
};	
