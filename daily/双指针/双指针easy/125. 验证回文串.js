/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const isValid = (ch) => {
        return (ch>='a' && ch<='z') || (ch>='A' && ch<='Z') || (ch>='0' && ch<='9')
    }
    s = s.toUpperCase()
    let i=0, j=s.length-1
    while(i<j) {
        if(!isValid(s[i])) {
            i++
            continue
        }
        if(!isValid(s[j])) {
            j--
            continue
        }
        if(s[i]!==s[j])
            return false
        i++
        j--
    }
    return true
};