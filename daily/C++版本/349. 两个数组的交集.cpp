class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        vector<int> vec,res;
        for(int i=0;i<nums1.size();i++)
            for(int j=0;j<nums2.size();j++)
                if(nums1[i]==nums2[j])
                    vec.push_back(nums1[i]);
                    
        set<int> s(vec.begin(),vec.end());
        for(set<int>::iterator temp=s.begin();temp!=s.end();temp++)
            res.push_back(*temp);
        return res;
    }
};
