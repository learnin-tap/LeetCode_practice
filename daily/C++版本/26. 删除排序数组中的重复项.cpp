class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int sum=0;
        nums.push_back(-9999);   //Ϊ����ԭ�������һ�����ܼӵ�sum����ȥ
        for(int i=1;i<nums.size();i++)
            if(nums[i]!=nums[i-1])
                nums[sum++]=nums[i-1];
        return sum;   
    }
};
