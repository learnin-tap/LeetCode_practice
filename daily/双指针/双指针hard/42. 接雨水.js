/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    var sum=0;
     // 第一列和最后一列不会积水
    for(var i=1;i<height.length-1;i++){
        var max_left=0;
        for(var j=0;j<i;j++)//求左边最高的柱子 
            if(max_left<height[j])
                max_left=height[j];
        var max_right=0;
        for(var j=i+1;j<height.length;j++)//右边最高的柱子
            if(max_right<height[j])
                max_right=height[j];
        if(Math.min(max_left,max_right)>height[i])//短板效应，然后比当前列高才能积水
        sum+=Math.min(max_left,max_right)-height[i];
    }
    return sum;
};