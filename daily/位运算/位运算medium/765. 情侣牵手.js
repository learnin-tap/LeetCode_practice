/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
    // 时间O(n),空间O(n),n为row的长度n+1
    let n = row.length
    let p = new Array(n+1)
    // 降低时间复杂度，使用 position 数组，建立值到索引的映射
    row.forEach((item, index) => {
        p[item] = index
    })
    let res = 0
    // 遍历偶数下标，找奇数下标匹配情侣
    for(let i=0; i<n; i+=2) {
        // 妙用异或，找与当前位置匹配的情侣编号
        let lover = row[i] ^ 1
        // 就是符合条件的此情侣无需操作
        if(row[i+1]==lover) continue
        let next = row[i+1]
        // 否则进行交换
        res++
        // 交换row中情侣位置，同时更新p位置数组,句末用逗号，否则代码执行会出问题
        [row[i+1], row[p[lover]]] =  [row[p[lover]], row[i+1]];
        [p[lover], p[next]] = [p[next], p[lover]]
    }
    return res
};