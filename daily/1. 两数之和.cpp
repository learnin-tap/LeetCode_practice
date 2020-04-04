//ÎÞÄÔ±©Á¦·¨ 
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        vector<int> box;
        for(int i=0;i<nums.size()-1;i++){
            for(int j=i+1;j<nums.size();j++){
                if(nums[i]+nums[j]==target){
                    box.push_back(i);
                    box.push_back(j);
                    return box;
                }
            }
        }
        return box;
    }
};


//¹þÏ£map
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        map<int,int> m;
        for(int i=0;i<nums.size();i++){
            if(m.find(target-nums[i])!=m.end()){
                return {m[target-nums[i]],i};
            }
            m[nums[i]]=i;
        }
        return {};
    }
}; 

