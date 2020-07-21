class Solution {
public:
    bool isValid(string s) {
        stack<char> stack;
        for(int i=0;i<s.length();i++){
            if(s[i]=='(' || s[i]=='[' || s[i]=='{'){
                stack.push(s[i]);
            }
            else{
                if(stack.empty())
                    return false;
                if(s[i]==')' && stack.top()!='(')
                    return false;
                if(s[i]==']' && stack.top()!='[')
                    return false;
                if(s[i]=='}' && stack.top()!='{')
                    return false;
                stack.pop();
            }
        }
        return stack.empty(); 
    }
};
