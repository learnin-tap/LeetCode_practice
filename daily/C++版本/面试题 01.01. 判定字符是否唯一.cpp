class Solution {
public:
    bool isUnique(string astr) {
        set<char> set;
        for(int i=0;i<astr.length();i++)
            set.insert(astr[i]);
        return set.size()==astr.length();
    }
};