/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        if (l1 == null) return l2;
        if (l2 == null) return l1;
        ListNode node1 = reverse(l1);
        ListNode node2 = reverse(l2);
        int carry = 0;
        ListNode newHead = new ListNode(0);
        ListNode curr = newHead;
        while (node1 != null || node2 != null){
            int x = node1 != null ? node1.val : 0;
            int y = node2 != null ? node2.val : 0;
            int num = (x + y + carry) % 10;
            ListNode node = new ListNode(num);
            curr.next = node;
            curr = node;
            carry = (x + y + carry) / 10;
            if (node1 != null) node1 = node1.next;
            if (node2 != null) node2 = node2.next;
        }
        // 最后加上 carry
        if (carry > 0) curr.next = new ListNode(carry);
        ListNode res = reverse(newHead.next);
        return res;
    }
    // 链表反转
    public ListNode reverse(ListNode head){
        if (head == null) return null;
        ListNode pre = null;
        while (head != null){
            ListNode next = head.next;
            head.next = pre;
            pre = head;
            head = next;
        }
        return pre;
    }
}

作者：kelly2018
链接：https://leetcode-cn.com/problems/add-two-numbers-ii/solution/lian-biao-fan-zhuan-bu-jie-zhu-zhan-by-tiantianliu/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
