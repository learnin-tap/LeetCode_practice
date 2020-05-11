/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
public:
    int sumOfLeftLeaves(TreeNode* root) {
        int sum=0;
        if(!root)
            return 0;
        if(root->left && !root->left->left && !root->left->right)
            sum+=root->left->val;
        return sum+sumOfLeftLeaves(root->left)+sumOfLeftLeaves(root->right);
    }
};