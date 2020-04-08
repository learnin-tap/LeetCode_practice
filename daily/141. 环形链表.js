
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    //哈希表法
    // if(!head)
    //     return false;
    // var p=head;
    // var map=new Map();
    // map.set(p,true);
    // while(p.next)
    // {
    //     if(map.has(p.next))
    //         return true;
    //     map.set(p.next,true);
    //     p=p.next;
    // }
    // return false;

    //快慢指针法
    // if(!head)
    //     return false;
    // var p=head,q=head;
    // while(p && p.next)
    // {
    //     p=p.next.next;
    //     q=q.next;
    //     if(p==q)
    //         return true;
    // }
    // return false;

    //骚做法，JSON.stringify不能字符串化含循环引用的结构
    // try{
    //     JSON.stringify(head)
    //         return false;
    // }catch(err){
    //     return true;
    // }
};