/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    var ch=[],res='';   //ch为栈，res存放返回结果
    for(let i=0;i<S.length;i++){
        if(S[i]=='('){
            if(ch.length>0) //最外层的不被加入res中
                res+=S[i];
            ch.push(S[i]);
        }
        else{
            res+=S[i];
            ch.pop();
            if(ch.length==0)    //最外层的不被加入res中
                res=res.substr(0,res.length-1);
        }
    }
    return res;
};