class Solution {
public:
    int maxProfit(vector<int>& prices) {
        if(!prices.size())
            return 0;
        int diff=0;
        stack<int> stack;
        stack.push(prices[0]);
        for(int i=0;i<prices.size();i++){
            if(stack.top()>prices[i]){
                stack.pop();
                stack.push(prices[i]);
            }
            else
                diff=(prices[i]-stack.top()>diff)?prices[i]-stack.top():diff;
        }
        return diff;
    }
};