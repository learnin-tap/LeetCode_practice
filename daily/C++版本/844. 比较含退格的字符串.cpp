class Solution {
public:
    bool backspaceCompare(string S, string T) {
        stack<char> stack1,stack2;
        for(int i=0;i<S.length();i++){
            if(S[i]=='#'){
                if(!stack1.empty())
                    stack1.pop();
                else
                    stack1=stack1;
            } 
            else
                stack1.push(S[i]);
        }

        for(int i=0;i<T.length();i++){
            if(T[i]=='#'){
                if(stack2.empty())
                    stack2=stack2;                       
                else
                    stack2.pop();      
            }
            else
                stack2.push(T[i]);
        }
        if(stack1==stack2)
            return true;
        else    
            return false;
    }
};
