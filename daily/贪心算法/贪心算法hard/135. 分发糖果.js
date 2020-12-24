/**
 * @param {number[]} ratings
 * @return {number}
 */
// 两边一起考虑会顾此失彼，所以利用贪心，先确定每个孩子左边的情况，再确定右边情况
// 确定左边的情况用正序遍历，确认右边的情况用逆序遍历
var candy = function(ratings) {
    if(!ratings.length)
        return 0
    let res = new Array(ratings.length).fill(1) //填充默认值 1
    // 正序遍历确定每位孩子左边的情况
    for(let i=1; i<ratings.length; i++)
        if(ratings[i]>ratings[i-1])
            res[i] = res[i-1] + 1
    // 逆序遍历确定每位孩子右边的情况
    for(let i=ratings.length-2; i>=0; i--)
        if(ratings[i]>ratings[i+1] && res[i]<=res[i+1])
            res[i] = res[i+1] + 1
    return res.reduce((cur, item)=>cur+item)
};