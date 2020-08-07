/**
 * @param {string[]} names
 * @return {string[]}
 */
// 挺简单的一道题，set去重+相同文件加入时的处理
// 1.首先if判断 set存放不重名文件
// 2.然后else处理 while循环 同名文件系数分配如 names[1],name[2],name[3]
// 3.return的结果用Array.from()将set转成数组
var getFolderNames = function(names) {
    let set = new Set()
    names.forEach(item=>{
        if(!set.has(item))
            set.add(item)
        else{
            let sum=1,val=`${item}(${sum})` //val即item[1]
            while(1){
                if(!set.has(val)){
                    set.add(val)
                    break
                }
                val=`${item}(${sum++})` //遇上相同的再+1，如item[2],item[3]
            }
        }
    })
    return Array.from(set)
};