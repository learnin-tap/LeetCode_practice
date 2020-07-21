class Solution {
public:
    string removeOuterParentheses(string S) {
        string res;
        stack<char> stack;
        for(int i=0;i<S.length();i++){
            if(S[i]=='('){
                if(!stack.empty())
                    res+=S[i];
                stack.push(S[i]);
            }
            else{
                res+=S[i];
                stack.pop();
                if(stack.empty()) 
                    res.pop_back();          
            }
        }
        return res;
    }
};
