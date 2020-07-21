class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int sum=0;
        nums.push_back(-9999);   //为了让原向量最后一个数能加到sum里面去
        for(int i=1;i<nums.size();i++)
            if(nums[i]!=nums[i-1])
                nums[sum++]=nums[i-1];
        return sum;   
    }
};
