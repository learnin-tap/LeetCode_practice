class Solution {
public:
    int myAtoi(string str) {
        int min=-pow(2,31),max=pow(2,31)-1;
        int flag=1,i=0;
        long long sum=0;
        while(str[i]==' ')	//去除前导的0 
            i++;
        if(str[i]=='+')	//判出正负 
            i++;
        else if(str[i]=='-'){
            flag=-1; 
            i++;
        }
        if(str[i]-'0'<0 || str[i]-'0'>9)
            return 0;
        for(;i<str.length();i++){
            if(str[i]-'0'<0 || str[i]-'0'>9)
                break;
            sum*=10;
            sum+=str[i]-'0';
            if(sum>max)		//sum过大会越界，用这种方式处理保证不会越界，同时不影响最终计算 
                sum=pow(2,31);
        }
        if(sum>max && flag==1)
            return max;
        else if(sum>max && flag==-1)
            return min;	
        return sum*flag;
    }
};
