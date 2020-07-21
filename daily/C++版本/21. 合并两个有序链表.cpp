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
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        ListNode *flag=new ListNode,*p=flag;
        while(l1 && l2) //ֱ��������Ϊ��Ϊֹ
        {
            if(l1->val>l2->val){
                p->next=l2;
                l2=l2->next;
            }
            else{
                p->next=l1;
                l1=l1->next;
            }
            p=p->next;
        }
        p->next=(l1==NULL)?l2:l1;   //��ʣ��ļ���ȥ
        return flag->next;
        
        
//        //�ݹ�д��
//		 if(l1==NULL)
//            return l2;
//        if(l2==NULL)
//            return l1;
//        if(l1->val<l2->val){
//            l1->next=mergeTwoLists(l1->next,l2);
//            return l1;
//        }
//        else{
//            l2->next=mergeTwoLists(l1,l2->next);
//            return l2;
//        } 
        
};
