/**
 * @param {string} S
 * @return {string}
 */
var compressString = function(S) {
    let sum = 0, m = [1], n = []
    for(let i=0; i<S.length; i++) {
        if(S[i]==S[i+1])
            m[sum]++
        else {
            sum++
            m[sum]=1
            n.push(S[i])      
        }
    }

    let res=''
    n.forEach((item,index)=>{
        res+=`${item}${m[index]}`
    })

    return S.length <= res.length ? S : res
};