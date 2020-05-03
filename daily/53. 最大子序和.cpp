class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int max=nums[0],sum=0;
        for(int i=0;i<nums.size();i++){
            if(sum>0)
                sum+=nums[i];
            else
                sum=nums[i];
            max=max(max,sum);
        }
        return max;
    }
};