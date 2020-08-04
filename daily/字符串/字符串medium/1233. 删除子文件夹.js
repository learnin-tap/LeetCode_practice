/**
 * @param {string[]} folder
 * @return {string[]}
 */
// 1. 先排序，同时定义一个Set和一个数组，存放排序后的第一个值
// 2. 用forEach循环，每次和数组最后一个比较，因为排序好了的，所以数组最后一项长度<=要比较那项的长度
// 3. 比较过程中会出现两种情况，一是正常的，如/a/b和/a/c;二是特殊的，如/a/b和/a/bc，两种情况两种判断方法
// 4. 我在上一步处理两种情况时，如果用数组添加会出现重复情况，于是使用了Set，最后return的结果再转为数组
var removeSubfolders = function(folder) {
    let s =new Set(),a = []
    folder.sort()   //先排序
    s.add(folder[0]),a.push(folder[0])  //先放入第一个值，便于比较

    folder.forEach(item=>{
        let flag = false, a_last = a[a.length-1]    //和最后一项比较.因为排序的缘故.先加入数组的是最小的
        for(let i=0;i<a_last.length && i<item.length;i++)
            if(item[i]!=a_last[i])
                flag=true
        
        if(flag==true)  //径直比较
            s.add(item),a.push(item)
        if(flag==false && item[a_last.length]!='/') //另外一种情况，如 /a/b和/a/bc
            a.push(item),s.add(item)
    })
    return Array.from(s)
};