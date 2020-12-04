/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    // 统计nums，将结果放在map里面
    const map = new Map()
    for(let i=0; i<nums.length; i++) {
        let key = nums[i]
        let value = map.get(key) || 0
        map.set(key, value + 1)
    }
    console.log(map)
    while(nums.length) {
        let count = 0
        let prev_key = -Infinity
        let prev_count = 0
        for(let [key, value] of map) {
            // 跳过条件，未开始计数，当前值为0
            if(value==0 && count==0) continue
            // 结束条件，键不连续
            if(prev_key!=-Infinity && prev_key+1!=key)   break
            // 结束条件，值不连续
            if(value<prev_count)    break
            // 记录本次的键和值
            prev_count = value
            prev_key = key

            // 更新map将本次的值 -1
            map.set(key, value-1)
            // 更新nums的长度 -1
            nums.pop()
            // 更新本次遍历取得连续子串长度 +1
            count++
        }
        // 遍历剩余map 取出的连续子串小于3 失败
        if(count<3) return false
    }
    // 结束while 将nums成功分解完毕 成功
    return true
};