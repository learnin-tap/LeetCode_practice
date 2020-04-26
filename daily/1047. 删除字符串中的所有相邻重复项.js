/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    var stack=[];
    for(i of S){
        let top=stack.pop();
        if(i!=top){ //不相等就按之前顺序压回栈中
            stack.push(top);
            stack.push(i);
        }
    }
    return stack.join('');
};