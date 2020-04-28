/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(!prices.length)
        return 0;
    let diff=0,stack=[];
    stack.push(prices[0]);
    for(let i=0;i<prices.length;i++){
        if(stack[0]>prices[i]){
            stack.pop();
            stack.push(prices[i]);
        }
        else if(diff<prices[i]-stack[0])   
            diff=prices[i]-stack[0];
    }
    return diff;
};