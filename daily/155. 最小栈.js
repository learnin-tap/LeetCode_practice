/**
 * initialize your data structure here.
 */
var MinStack = function() {
    
};

var stack=[],min=[];
/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    if(min.length==0 || min[min.length-1]>=x)
        min.push(x);
    stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(stack[stack.length-1]==min[min.length-1])
        min.pop();
    stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return stack[stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return min[min.length-1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */