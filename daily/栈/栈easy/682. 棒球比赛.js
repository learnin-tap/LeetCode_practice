/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    var stack=[],sum=0;
    for(let i=0;i<ops.length;i++){
        if(ops[i]=='C'){
            sum-=parseInt(stack[stack.length-1]);
            stack.pop();
        }
        else if(ops[i]=='D'){
            sum+=parseInt(stack[stack.length-1])*2;
            stack.push(parseInt(stack[stack.length-1])*2);
        }
        else if(ops[i]=='+'){
            
            let a=parseInt(stack[stack.length-1]);
            stack.pop();
            let b=parseInt(stack[stack.length-1]);
            stack.pop();
            sum+=a+b;
            stack.push(b),stack.push(a),stack.push(a+b);
        }
        else{
            sum+=parseInt(ops[i]);
            stack.push(ops[i]);
        }   
    }
    return sum;
};