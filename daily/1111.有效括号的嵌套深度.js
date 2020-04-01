/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    var a=0,b=0,arr=[];
    for(let i of seq){
        if(i=='(')
            a<=b?(a++,arr.push(0)):(b++,arr.push(1));   //三元运算符代替if else
        else
            a>b?(a--,arr.push(0)):(b--,arr.push(1));
    }
    return arr
};
/**
 * 思路:
 * 题目意思就是分成 a b两部分，初始为0
 * 每次往a或b中加入seq[i],分给a时answer[i]=0,分给b时answer[i]=1
 * 如果seq[i]=='(' 此时a和b谁深度小就把它加大
 * 如果seq[i]==')' 此时a和b谁深度大就把它压小
 * 这样做就能保证a和b深度是差不多的，也就能得到a、b两个字符串的最小深度
 * 需要注意：当a和b深度一样时，放谁那里都行，所以你用第二个样例测试答案可能会和你跑的结果不一样
 */