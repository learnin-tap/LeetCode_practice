class Solution {
public:
    int calPoints(vector<string>& ops) {
        int sum=0;
        stack<int> stack;
        for(int i=0;i<ops.size();i++){
            if(ops[i]=="C"){
                sum-=stack.top();
                stack.pop();
            }
            else if(ops[i]=="D"){
                sum+=stack.top()*2;
                stack.push(stack.top()*2);
            }
            else if(ops[i]=="+"){
                int a,b;    //保存弹栈一次和两次的值
                a=stack.top(),stack.pop();
                b=stack.top(),stack.pop();
                sum+=a+b;
                stack.push(b),stack.push(a),stack.push(a+b);
            }
            else{
                int a;
                stringstream ss;    //字符串转数字
                ss<<ops[i];
                ss>>a;
                sum+=a;
                stack.push(a);
            }
        }
        return sum;
    }
};
