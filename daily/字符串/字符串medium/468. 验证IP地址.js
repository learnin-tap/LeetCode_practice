/**
 * @param {string} IP
 * @return {string}
 */
// 我的思路是先校验属不属于IPv4,再校验属不属于IPv6,都不属于就是Neither
// 先分割成数组，再进行各种判断，不能用forEach，因为无法return和break
var validIPAddress = function(IP) {
    let temp = [] ,sum = 0
    for(let i=0;i<IP.length;i++)
        temp=IP.split('.')
    for(let i=0;i<temp.length;i++){
        let str = temp[i]
        if((str[0]=='0' && str.length!=1) || str=='')   //空值和前导的0是无效的
            return "Neither"
        let flag=0
        for(let j=0;j<str.length;j++)
            if(str[j]>='0' && str[j]<='9')
                flag++
        if(flag==str.length && str>=0 && str<=255)
            sum++
    }
    if(sum==4)
        return "IPv4"
    
    temp = [], sum = 0  //恢复初始状态，继续进行IPv6的判断
    for(let i=0;i<IP.length;i++)
        temp=IP.split(':')
    for(let i=0;i<temp.length;i++){
        let str=temp[i],flag=0
        if((str.length>4) || str=='')  //空值和多余的0是无效的
            return "Neither"       
        for(let j=0;j<str.length;j++)
            if((str[j]>='0'&&str[j]<='9') || (str[j]>='a'&&str[j]<='f') || (str[j]>='A'&&str[j]<='F'))
                flag++
        if(flag==str.length)
            sum++
    }
    if(sum==8)
        return "IPv6"
    return "Neither"
    
};