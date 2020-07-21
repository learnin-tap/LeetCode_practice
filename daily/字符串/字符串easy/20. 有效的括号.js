/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let a=[];
    for(let i=0;i<s.length;i++){
        if(s[i]=='(' || s[i]=='[' || s[i]=='{')
           a.push(s[i]);         
        else{      
            if(a.length==0)
                return false;
            if(s[i]==')' && a[a.length-1]!='(')
                return false;
            if(s[i]==']' && a[a.length-1]!='[')
                return false;
            if(s[i]=='}' && a[a.length-1]!='{')
                return false;     
            a.pop();
        }
    }
    return a.length==0?true:false;
};