/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let stack=[]
    ops.forEach(item=>{
        if(item=='+')
            stack.push(stack[stack.length-1] + stack[stack.length-2])
        else if(item=='D')
            stack.push(stack[stack.length-1]*2)
        else if(item=='C')
            stack.pop()
        else
            stack.push(Number(item))
    })
    return stack.reduce((sum,item)=>sum+=item)
};