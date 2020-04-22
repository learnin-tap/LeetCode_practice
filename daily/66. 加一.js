/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var nums=[],sum=0;
    for(let i=0;i<digits.length;i++)
        nums[sum++]=(i==digits.length-1)?digits[i]+1:digits[i];
    for(let i=nums.length-1;i>0;i--){   //第一项留到后面处理
        if(nums[i]==10){
            nums[i]=0;
            nums[i-1]+=1;
        }
    }
    if(nums[0]==10){    //处理第一项为10的情况
        let temp=[1,0];
        for(let i=1;i<nums.length;i++)
            temp.push(nums[i]);
        return temp;
    }
    return nums;
};