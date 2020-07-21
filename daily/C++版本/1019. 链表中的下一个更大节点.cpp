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
    vector<int> nextLargerNodes(ListNode* head) {
        // 暴力解法
        vector<int> vec;
        if(!head->next){    //只有一个元素的情况
            vec.push_back(0);
            return vec;
        }      
        while(head)
        {
            int flag=0;
            ListNode *p=head->next;
            while(p)
            {
                if(p->val>head->val){
                    flag=1;
                    vec.push_back(p->val);
                    break;
                }
                p=p->next;
            }
            if(flag==0)
                vec.push_back(0);                 
            head=head->next;
        }
        return vec;
    }
};