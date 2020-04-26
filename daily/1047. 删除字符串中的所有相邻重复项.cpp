class Solution {
public:
    string removeDuplicates(string S) {
        stack<char> stack;
        string res="";
        for(int i=0;i<S.length();i++){
            if(!stack.empty() && S[i]==stack.top()){
                    stack.pop();  
                    res.pop_back();              
            }
            else{
                stack.push(S[i]);
                res+=S[i];
            }
        }
        return res;
    }
};