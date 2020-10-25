/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
   if(!head)
    return null
    const map = new Map(), root = new Node(head.val)
    let p = head.next, cur = root
    map.set(head, root)
    while(p) {
        let node = new Node(p.val)
        cur.next = node
        cur = cur.next
        map.set(p ,node)
        p = p.next
    }
    p = head
    while(p) {
        if(p.random) {
            map.get(p).random = map.get(p.random)
        }
        p = p.next
    }
    return root
};