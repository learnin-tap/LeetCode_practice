class Solution {
public:
    vector<int> maxDepthAfterSplit(string seq) {
        int a=0,b=0;
        vector<int> vec;
        for(int i=0;i<seq.length();i++){
            if(seq[i]=='('){
                if(a<=b){
                    a++;
                    vec.push_back(0);
                }
                else{
                    b++;
                    vec.push_back(1);
                }
            }
            else{
                if(a>b){
                    a--;
                    vec.push_back(0);
                }
                else{
                    b--;
                    vec.push_back(1);
                }
            }
        }
        return vec;
    }
};
