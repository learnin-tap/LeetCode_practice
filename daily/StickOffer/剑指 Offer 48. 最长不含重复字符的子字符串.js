/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // ʱ��O(n)���ռ�O(n)
    let max = 0, flag = 0   //flag��¼�Ӵ���ʼλ��
    let map = new Map()
    for(let i=0; i<s.length; i++) {
        if(map.has(s[i]))
            flag = Math.max(flag, map.get(s[i])+1)
        max = Math.max(max, i-flag+1)
        map.set(s[i], i)
    }
    return max
};