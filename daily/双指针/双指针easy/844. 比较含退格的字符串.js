/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    var stack1=[],stack2=[];
    for(let i=0;i<S.length;i++){
        if(S[i]=='#')
            if(S.length!=0) //不为空才能弹栈
                stack1.pop();
            else    //为空则不作任何处理
                stack1=stack1;
        else
            stack1.push(S[i]);   
    }

    for(let i=0;i<T.length;i++){
        if(T[i]=='#')
            if(T.length!=0) //不为空才能弹栈
                stack2.pop();
            else    //为空则不作任何处理
                stack2=stack2;
        else
           stack2.push(T[i]);
    }
    if(stack1.length!=stack2.length)    //栈的大小不等则不相等
        return false;
    for(let i=0;i<stack1.length;i++)
        if(stack1[i]!=stack2[i])    //栈中任一元素不相等则不相等
            return false;
    return true;
};