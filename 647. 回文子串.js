/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let sum = 0
    for(let i=0; i<s.length; i++) 
        for(let j=i; j<s.length; j++) 
            if( s[i] == s[j] && compare(s, i, j) )
                sum++
    return sum
};

var compare = function(s, a, b){
    for(let i = a; i <= (b-a)/2+a; i++)
        if(s[i] != s[b-i+a]) 
            return false
    return true
}