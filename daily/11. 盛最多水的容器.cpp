class Solution {
public:
    int maxArea(vector<int>& height) {
        int left=0,right=height.size()-1;
        int max=0;
        while(left<right){
            if((right-left)*min(height[left],height[right])>max)
                max=(right-left)*min(height[left],height[right]);
            else
                height[left]<height[right]?left++:right--;	
            
        }
        return max;
    }
};
