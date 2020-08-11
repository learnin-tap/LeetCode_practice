/**
 * @param {number[]} deck
 * @return {boolean}
 */

var hasGroupsSizeX = function(deck) {
    // if(deck.length<=1)
    //     return false
    // deck.sort((a,b)=>{return a-b})  //先对数组进行排序

    // let res=[]
    // for(let i=0;i<deck.length;i++)  //找出不同数字之间的末尾一个数
    //     if(deck[i]!=deck[i+1])
    //         res.push(i)

    // let gap=res[0]+1,maze=[]    //找出间隔
    // if(gap<2)   //间隔数需要大于2，这样才可以保证每组至少两张牌
    //     return false 
    // for(let i=2;i<=gap;i++)
    //     if(gap%i==0)
    //         maze.push(i)    //所有可能成组的情况，如间隔6可以划分2和3两种
    // let count=0
    // for(let j=0;j<maze.length;j++){
    //     for(let i=0;i<res.length-1;i++)
    //         if( (res[i+1]-res[i])%maze[j]==0 )
    //             count++
    //     if(count==res.length-1) //保证每个都是等分情况，内层循环的多种间隔情况只要满足至少一种即可
    //         return true
    //     count=0 //新的循环归零重新计算
    // }
    // return false

    // 大佬解法
    // 一、hash+gcd🎴
    // 1.遍历deck，得到key-value的map。再用map.values()取出其value。
    // 2.利用gcd判断每个数是否满足最大公约数>1
    let map = new Map()
    for(let n of deck)
        map.set(n,map.has(n)?map.get(n)+1:1)
    let arr = [...map.values()]
    let res = arr[0]
    return arr.every(i => (res = gcd(res, i)) > 1)
};

let gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))
