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
    ListNode* oddEvenList(ListNode* head) {
        if(!head)
            return NULL;
        ListNode *p=head,*q=head->next;
        ListNode *temp_p=p,*temp_q=q;   //保存首位的奇偶节点
        while(q && q->next)  //节点q会提前走完
        {
            //节点p q分别遍历奇偶节点
            p->next=p->next->next;  
            q->next=q->next->next;  
            p=p->next;
            q=q->next;
        }
        p->next=temp_q; //奇节点末梢连接首位的偶节点
        return temp_p;
    }
};
