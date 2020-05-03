class MinStack {
public:
    /** initialize your data structure here. */
    stack<int> stack,flag;
    MinStack() {
        
    }
    
    void push(int x) {
        if(flag.empty() || flag.top()>=x)
            flag.push(x);
        stack.push(x);
    }
    
    void pop() {
        if(stack.top()==flag.top())
            flag.pop();
        stack.pop();
    }
    
    int top() {
        return stack.top();
    }
    
    int getMin() {
        return flag.top();
    }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack* obj = new MinStack();
 * obj->push(x);
 * obj->pop();
 * int param_3 = obj->top();
 * int param_4 = obj->getMin();
 */