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
    bool isPalindrome(ListNode* head) {
        if(!head || !head->next)
            return true;
        ListNode *fast=head,*slow=head;
		while(fast && fast->next) //利用快慢指针找到中间值
        {
            slow=slow->next;
            fast=fast->next->next;
        }

        ListNode *L=new ListNode;   //新建一个链表存放后半部分反转的值
		ListNode *temp;    //用于存放slow的下一个指向，因为头插法会使其丢失
        while(slow)
        {
            temp=slow->next;
            slow->next=L;
            L=slow;
            slow=temp;
        }
        
        while(L && L->next )
        {
            if(head->val!=L->val)
                return false;
            head=head->next;
            L=L->next;
        }
        return true;
    }
};
