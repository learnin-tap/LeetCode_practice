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
    ListNode* removeDuplicateNodes(ListNode* head) {
        if(!head || !head->next)
            return head;
        ListNode *p=head;
        unordered_set<int> set;
        set.insert(head->val);  //��ͷ������set������
        while(p->next)
        {
            if(set.find(p->next->val)==set.end()){  //���ظ��ͼӽ�set����
                set.insert(p->next->val);
                p=p->next;
            }
            else{
                p->next=p->next->next;
            }
        }
        return head;
    }
};
