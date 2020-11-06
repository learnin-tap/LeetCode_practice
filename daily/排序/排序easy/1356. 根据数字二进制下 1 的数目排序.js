/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const map = []
    for(let i=0; i<arr.length; i++) {
        const item = arr[i].toString(2)
        let sum = 0
        for(let i=0; i<item.length; i++)
            if(item[i]=='1')
                sum++
        map.push([item, sum, i])
    }
    map.sort((a,b)=>a[1]-b[1] || a[0]-b[0])  //先按个数再按升序排
    const res = []
    map.forEach(item => {
        res.push(arr[item[2]])
    })
    return res
};