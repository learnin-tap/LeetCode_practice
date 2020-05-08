class Solution {
public:
    int compare(int num1,int num2){
        if(num1<num2)
            return -1;
        else if(num1>num2)
            return 1;
        else
            return 0;
    }
    int largestPerimeter(vector<int>& A) {
        sort(A.begin(),A.end(),greater<int>());
        for(int i=0;i<A.size()-2;i++)
            if(A[i+1]+A[i+2]>A[i])
                return A[i]+A[i+1]+A[i+2];
        return 0;
    }
};