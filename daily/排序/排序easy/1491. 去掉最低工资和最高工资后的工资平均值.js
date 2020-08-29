/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    salary.sort((a,b)=>a-b)
    salary.shift()
    salary.pop()
    return salary.reduce((a,b)=>a+b)*1.0/salary.length
};