/**
 * @param {number[]} bills
 * @return {boolean}
 */
// 当遇到10美元和20美元才是要考虑的情况
// 10美元直接找零5美元即可，20美元应先找零10美元的，再找零5美元的
var lemonadeChange = function(bills) {
    if(bills[0]!=5)
        return false
    let five = 0 , ten = 0, stack = []
    for(let i=0; i<bills.length; i++) {
        let item = bills[i]
        // 5美元直接收下
        if(item==5)
            five++
        // 10美元找零5美元
        if(item==10 && five>=1)
            if(five>=1)
                five--,ten++
            else
                return false
        // 20美元先找零一张10美元和一张5美元，没有再全找零5美元的
        if(item==20)
            if(ten>=1 && five>=1)
                ten--,five--
            else if(ten==0 && five>=3)
                five-=3
            else
                return false
    }
    return true
};