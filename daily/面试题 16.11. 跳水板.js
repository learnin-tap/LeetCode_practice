/**
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
var divingBoard = function(shorter, longer, k) {
    let res = []
    if(k == 0)
        return []
    else if(shorter == longer){
        res.push(shorter*k)
        return res
    }
    else{
        let begin = shorter*k, end = longer*k
        for(let i=begin;i<=end; i=i+(longer-shorter)){
            res.push(i)
        }
        return res
    }
};