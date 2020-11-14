/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    const rest = [], index = new Array(arr2.length).fill(0) 
    for(let i=0; i<arr1.length; i++) {
        const item = arr2.indexOf(arr1[i])
        if(item!=-1)
            index[item]++   //记录已在出现数组中元素个数
        else
            rest.push(arr1[i])  //记录未在数组中的元素
    }
    const res = []
    for(let i=0; i<arr2.length; i++) {
        const temp = new Array(index[i]).fill(arr2[i])  //数组元素填充次数
        res.push(...temp)   //压入结果中
    }
    res.push(...rest.sort((a,b)=>a-b))  //将未在数组中的元素排序后压入数组
    return res
};