/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let map=['',1,'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']
    let code=[]
    digits.split('').forEach(item=>{
        if(map[item]){
            code.push(map[item])
        }
    })
    if(code.length==0)
        return []
    else if(code.length==1)
        return  [...code[0]]
    else if(code.length>=2){
        recurrence(code)    //执行操作
        return code[0]  //最后只剩一项就是最终结果
    }       
};

function recurrence(code){
    let temp=[]
    for(let i=0,len1=code[0];i<len1.length;i++)
        for(let j=0,len2=code[1];j<len2.length;j++)
            temp.push(`${len1[i]}${len2[j]}`) 
    code.splice(0,2,temp)   //将前两项的结果合并，换成新的结果
    if(code.length>=2)  //至少有两项说明还能继续拼接字母，于是递归继续操作
        recurrence(code)
}