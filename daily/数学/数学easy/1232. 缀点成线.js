/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    if(coordinates.length <= 2)
        return true
    let [x1, y1] = coordinates[0], [x2, y2] = coordinates[1]
    if(x2 - x1 == 0) {  //斜率为o，单独处理
        for(let i=2; i<coordinates.length; i++)
            if(coordinates[i][0] != x1)
                return false
        return true
    }
    // 斜率
    let a = (y2-y1) * 1.0 / (x2-x1)
    // y轴上的值
    let b = y1 - a * x1
    for(let i=2; i<coordinates.length; i++)
        if(a * coordinates[i][0] + b != coordinates[i][1])
            return false
    return true
};