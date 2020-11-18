/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const len = gas.length
    const helper = (index, flag) => {
        for(let i=0; i<len; i++) {  
            flag = flag - cost[index]   //flag为迭代的汽油量
            if(flag < 0)
                break
            index++
            index %= len
            flag += gas[index]
        }
        return flag
    }

    for(let i=0; i<len; i++)
        if(gas[i]>=cost[i] && helper(i, gas[i]) >= 0)
            return i
    return -1
};