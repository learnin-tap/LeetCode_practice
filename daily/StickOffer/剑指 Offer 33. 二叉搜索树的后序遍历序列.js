/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
    const len = postorder.length
    if(len < 2)
        return true
    const root = postorder[len-1]
    let leftNode = 0    // 左节点的数量
    while(leftNode<len-1 && postorder[leftNode]<root)
        leftNode++
    // 检查右子树的值是否满足条件
    for(let i=leftNode; i<len-1; i++) {
        if(postorder[i]<root)
            return false
    }
    return (
        verifyPostorder(postorder.slice(0, leftNode)) &&
        verifyPostorder(postorder.slice(leftNode, len-1))
    )
};