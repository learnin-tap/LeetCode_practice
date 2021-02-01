/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    // O(n)时间，O(logn)空间
    const buildBST = (nums, start, end) => {
        if(start>end)
            return null
        const minIndex = Math.floor((start+end)/2)
        const root = new TreeNode(nums[minIndex])   //从中间选保证左右子树高度平衡
        root.left = buildBST(nums, start, minIndex-1)
        root.right = buildBST(nums, minIndex+1, end)
        return root
    }
    return buildBST(nums, 0, nums.length-1)
};