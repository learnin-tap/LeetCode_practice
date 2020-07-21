class Solution {
public:
    int trap(vector<int>& height) {
        int size=height.size(),sum=0;
        // 第一列和最后一列不会积水
        for(int i=1;i<size-1;i++){
        	int max_left=0;
            for(int j=0;j<i;j++)   //求左边最高的柱子 
                if(max_left<height[j])
                    max_left=height[j];
            int max_right=0;
            for(int j=i+1;j<size;j++)  //右边最高的柱子
                if(max_right<height[j])
                    max_right=height[j];
            if(min(max_left,max_right)>height[i])	//短板效应，然后比当前列高才能积水 
            	sum+=min(max_left,max_right)-height[i];
        } 
        return sum;
    }
};
